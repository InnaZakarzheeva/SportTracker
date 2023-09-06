import { connect, ConnectedProps } from "react-redux";

import { ReduxStore } from "@State";

import RootNavigator from "./RootNavigator";

export interface StateProps {
  splashShown: boolean;
  userRegistered: boolean;
  userLoggedIn: boolean;
}

const mapState = (state: ReduxStore): StateProps => ({
  splashShown: state.navigation.splashShown,
  userRegistered: state.navigation.userRegistered,
  userLoggedIn: state.navigation.userLoggedIn,
});

export const connector = connect(mapState);
export type Props = ConnectedProps<typeof connector>;
export default connector(RootNavigator);
