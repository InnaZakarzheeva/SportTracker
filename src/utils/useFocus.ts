import { useRef } from "react";

export function useFocus<T>(formInitialValues: T) {
  const refs: any = {};

  const keys = Object.keys(formInitialValues);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i]) {
      refs[keys[i]] = {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        ref: useRef(null),
        nextRefName: i + 1 !== keys.length ? keys[i + 1] : null,
      };
    }
  }

  return refs;
}
