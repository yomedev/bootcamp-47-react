import { fetchStatus } from "../../constants/fetch-status";

export const profileInitialState = {
  status: fetchStatus.Idle,
  data: null
}