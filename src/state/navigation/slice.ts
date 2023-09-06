import { NavigationState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "NAVIGATION";

const initialState: NavigationState = {
  splashShown: true,
  userRegistered: false,
  userLoggedIn: false,
};

const navigationSlice = createSlice({
  name: SLICE_NAME,
  initialState: initialState,
  reducers: {
    hideSplashScreen: state => {
      state.splashShown = false;
    },
    navigateToMain: state => {
      state.userLoggedIn = true;
    },
  },
});

export default navigationSlice;
