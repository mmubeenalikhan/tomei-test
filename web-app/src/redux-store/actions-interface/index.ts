import { ActionType } from "../action-type/index";

interface SignedUpAction {
  type: ActionType.PROGRESS_BAR_STEP_1;
  payload: any;
}

export type Action = SignedUpAction;
