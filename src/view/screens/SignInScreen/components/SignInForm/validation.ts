import * as Yup from "yup";
import { Strings } from "../../../../../resources/assets";

const {
  validation: { common },
} = Strings;

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email(common.email_error).required(common.required),
  password: Yup.string()
    .min(2, common.minimum)
    .max(10, common.maximum)
    .required(common.required),
});
