import { StackNavigationProp } from "@react-navigation/stack";
import { ConnectedProps } from "react-redux";

import { RootStackParamList } from "@Navigation/types";
import { SignInPayload } from "@State";

import { connector } from "./index";

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignInScreen"
>;

export interface StateProps {}

export interface DispatchProps {
  signIn: (payload: SignInPayload) => void;
}

export type PropsFromRedux = ConnectedProps<typeof connector>;
export default interface Props extends PropsFromRedux {
  navigation: SignInScreenNavigationProp;
}
