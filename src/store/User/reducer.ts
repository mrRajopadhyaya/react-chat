import { ReduxAction } from "../../interface/Common";
import { UserState } from "../../interface/UserState";
import { UPDATE_PROFILE } from "./constant";

const initialState: UserState = {
  profile: {
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    providerId: '',
    uid: '',
    _id: ''
  },
};


export const UserReducer = (
  state: UserState = initialState,
  action: ReduxAction
) => {
  switch (action?.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: { ...action.payload },
      };
    default:
      return state;
  }
};
