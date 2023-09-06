import { connect } from "react-redux";

import { ReduxStore, signIn, SignInPayload } from "@State";

import { DispatchProps, StateProps } from "./types";
import SignInScreen from "./SignInScreen";

const mapState = (state: ReduxStore): StateProps => ({});

const mapDispatch: DispatchProps = {
  signIn: (payload: SignInPayload) => signIn(payload),
};

export const connector = connect(mapState, mapDispatch);
export default connector(SignInScreen);
