import { ConnectedProps } from "react-redux";
import { connector } from "./index";

export interface StateProps {
  isVisible: boolean;
  text: string;
  children?: any;
}

export interface DispatchProps {
  hideModal: () => void;
}

export type Props = ConnectedProps<typeof connector>;
