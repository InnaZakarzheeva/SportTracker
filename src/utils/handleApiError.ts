import { PayloadActionCreator } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";

import { ApiRequestError } from "@Api/ApiManager";
import { RequestErrorView } from "@State";

export function* handleApiError(
  error: ApiRequestError,
  actionCreator: PayloadActionCreator<RequestErrorView>
) {
  if (error.status >= 400 && error.status <= 500) {
    console.log("Api error client", JSON.stringify(error));
    yield put(
      actionCreator({
        code: error.status,
        message: (error.data.messages as Array<string>)?.join(`\n`),
      })
    );
  } else {
    console.log("Api error server", JSON.stringify(error));
    yield put(
      actionCreator({
        code: error.status || 500,
        message: "Something went wrong",
      })
    );
  }
}
