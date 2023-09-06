import { ReduxStore, hideSplashScreen, navigateToMain } from "@State";
import { connect } from "react-redux";

import { DispatchProps, StateProps } from "./types";
import SplashScreen from "./SplashScreen";

const mapState = (state: ReduxStore): StateProps => ({});

const mapDispatch: DispatchProps = {
  hideSplashScreen: () => hideSplashScreen(),
  navigateToMain: () => navigateToMain(),
};

export const connector = connect(mapState, mapDispatch);
export default connector(SplashScreen);
