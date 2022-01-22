import { combineReducers } from "redux";
import { UserReducer } from "./User/reducer";
import {RoomReducer} from './Room/reducer';

const rootReducer = () => {
  return combineReducers({
    user: UserReducer,
    room: RoomReducer
  });
};

export default rootReducer;
