import { StackNavigationProp } from "@react-navigation/stack";
import { ConnectedProps } from "react-redux";
import { RootStackParamList } from "@Navigation/types";
import { SignUpPayload } from "@State";
import { connector } from "./index";

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUpScreen"
>;

export interface StateProps {}

export interface DispatchProps {
  signUp: (payload: SignUpPayload) => void;
}

export type PropsFromRedux = ConnectedProps<typeof connector>;
export default interface Props extends PropsFromRedux {
  navigation: SignUpScreenNavigationProp;
}
