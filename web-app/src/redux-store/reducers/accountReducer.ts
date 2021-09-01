import { ActionType } from "../action-type/index";
import { Action } from "../actions-interface";
interface IUserAccount {
  password: string;
  confirmPassword: string;
  name: string;
  email: string;

}
interface IUserAccountState {
  account: IUserAccount[];
}
const INITIAL_STATE: IUserAccountState = {
  account: [],
};

const progressBarreducer = (state = INITIAL_STATE, action: Action): IUserAccountState => {
  switch (action.type) {
    case ActionType.PROGRESS_BAR_STEP_1:
      return {
        ...state,
        account: [action.payload, ...state.account],
      };
    default:
      return state;
  }
};

export default progressBarreducer;
