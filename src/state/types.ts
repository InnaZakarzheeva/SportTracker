export type RequestStatus = "idle" | "pending" | "success" | "failure";

export interface RequestErrorView {
  code: number;
  message: string;
}
