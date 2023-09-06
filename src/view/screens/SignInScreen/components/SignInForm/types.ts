import { FormikHelpers } from "formik";

export interface SignInFormValues {
  email: string;
  password: string;
}

export interface Props {
  navigateToSignUp: () => void;
  onSignIn: (
    values: SignInFormValues,
    helpers?: FormikHelpers<SignInFormValues>
  ) => void;
  initialValues: SignInFormValues;
  onFocus: () => void;
  onBlur: () => void;
}
