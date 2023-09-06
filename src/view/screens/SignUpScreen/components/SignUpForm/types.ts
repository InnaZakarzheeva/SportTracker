import { FormikHelpers } from "formik";

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Props {
  navigateToSignIn: () => void;
  onSignUp: (
    values: SignUpFormValues,
    helpers: FormikHelpers<SignUpFormValues>
  ) => void;
  initialValues: SignUpFormValues;
  onFocus: () => void;
  onBlur: () => void;
}
