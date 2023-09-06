import * as Yup from "yup";
import { Strings } from "@Resources/assets";

const {
  validation: { common },
} = Strings;

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, common.minimum)
    .max(10, common.maximum)
    .required(common.required),
  lastName: Yup.string()
    .min(2, common.minimum)
    .max(20, common.maximum)
    .required(common.required),
  email: Yup.string().email(common.email_error).required(common.required),
  password: Yup.string()
    .min(2, common.minimum)
    .max(15, common.maximum)
    .required(common.required),
});
