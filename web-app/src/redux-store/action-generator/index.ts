import { Dispatch } from "redux";
import { ActionType } from "../action-type";
import { Action } from "../actions-interface/index";

export const progressBarStep1 = (signup: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PROGRESS_BAR_STEP_1,
      payload: signup,
    });
  };
};
