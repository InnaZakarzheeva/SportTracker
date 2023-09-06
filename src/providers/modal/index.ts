import { connect } from "react-redux";

import { ReduxStore } from "@State";
import { hideModal } from "@State/modal";

import { DispatchProps, StateProps } from "./types";
import ModalProvider from "./ModalProvider";

const mapState = (state: ReduxStore): StateProps => ({
  isVisible: state.modal.isVisible,
  text: state.modal.text,
});

const mapDispatch: DispatchProps = {
  hideModal: () => hideModal(),
};

export const connector = connect(mapState, mapDispatch);
export default connector(ModalProvider);
