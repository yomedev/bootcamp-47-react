import { fetchStatus } from "../../constants/fetch-status";

export const authInitialState = {
  status: fetchStatus.Idle,
  access_token: "",
  token_type: "",
};
