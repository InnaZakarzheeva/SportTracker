import { all, fork } from "redux-saga/effects";
import { authRootSaga } from "./auth";

function* rootSaga() {
  yield all([fork(authRootSaga)]);
}

export default rootSaga;
