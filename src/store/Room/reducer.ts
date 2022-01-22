import { ReduxAction } from "../../interface/Common";
import { Message } from "../../interface/RoomState";
import { SET_CURRENT_ROOM, SET_MESSAGE_HISTORY, UPDATE_MESSAGE_HISTORY } from "./constant";

interface RoomState {
  currentRoom: any;
  messageHistory: Message[];
}

const initialState: RoomState = {
  currentRoom: {},
  messageHistory: [],
};

export const RoomReducer = (
  state: RoomState = initialState,
  action: ReduxAction
) => {
  switch (action?.type) {
    case SET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: action.payload,
      };
    case SET_MESSAGE_HISTORY:
      return {
        ...state,
        messageHistory: [...action.payload],
      };

    case UPDATE_MESSAGE_HISTORY: 
    return {
        ...state,
        messageHistory: [...state.messageHistory, action.payload]
    }
    default:
      return state;
  }
};
