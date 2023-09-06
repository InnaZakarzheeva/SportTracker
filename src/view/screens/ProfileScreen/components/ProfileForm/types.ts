import { FormikHelpers } from "formik";

export interface ProfileFormValues {
  firstName: string;
  lastName: string;
}

export interface Props {
  onSave: (
    values: ProfileFormValues,
    helpers: FormikHelpers<ProfileFormValues>
  ) => void;
  initialValues: ProfileFormValues;
  onFocus: () => void;
  onBlur: () => void;
}
