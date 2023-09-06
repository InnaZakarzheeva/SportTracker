import { ReduxStore, signUp, SignUpPayload } from "@State";
import { connect } from "react-redux";

import SignUpScreen from "./SignUpScreen";
import { DispatchProps, StateProps } from "./types";

const mapState = (state: ReduxStore): StateProps => ({});

const mapDispatch: DispatchProps = {
  signUp: (payload: SignUpPayload) => signUp(payload),
};

export const connector = connect(mapState, mapDispatch);
export default connector(SignUpScreen);
