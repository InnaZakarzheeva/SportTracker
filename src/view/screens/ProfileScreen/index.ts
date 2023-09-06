import { ReduxStore } from "@State";
import { DispatchProps, StateProps } from "./types";
import ProfileScreen from "./ProfileScreen";
import { connect } from "react-redux";

const mapState = (state: ReduxStore): StateProps => ({});

const mapDispatch: DispatchProps = {};

export const connector = connect(mapState, mapDispatch);
export default connector(ProfileScreen);
