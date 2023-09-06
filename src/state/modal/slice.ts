import { ModalState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "SLICE";

const initialState: ModalState = {
  isVisible: false,
  text: "",
};

const modalSlice = createSlice({
  name: SLICE_NAME,
  initialState: initialState,
  reducers: {
    showModal: (state: ModalState, { payload }) => {
      state.isVisible = true;
      state.text = payload;
    },
    hideModal: state => {
      state.isVisible = false;
      state.text = "";
    },
  },
});

export default modalSlice;
