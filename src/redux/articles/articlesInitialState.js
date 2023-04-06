import { fetchStatus } from "../../constants/fetch-status";

export const articlesInitialState = {
  status: fetchStatus.Idle,
  data: []
}