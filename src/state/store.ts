import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";
import NavigationSlice from "./navigation/slice";
import ModalSlice from "./modal/slice";
import AuthSlice from "./auth/slice";

const rootReducer = combineReducers({
  navigation: NavigationSlice.reducer,
  modal: ModalSlice.reducer,
  auth: AuthSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: false,
});

sagaMiddleware.run(rootSaga);

export default store;
export type ReduxStore = ReturnType<typeof rootReducer>;
