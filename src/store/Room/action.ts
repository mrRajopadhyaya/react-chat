import { UserProfile } from '../../interface/UserState';
import { SET_CURRENT_ROOM, SET_MESSAGE_HISTORY, UPDATE_MESSAGE_HISTORY } from './constant';
import { APILogin } from '../../API/auth';
import store from '../index';
import { APIGetMessageHistory } from '../../API/room';
import { Message } from '../../interface/RoomState';
// import { APIGetProfile } from '../../API/user';

export const updateCurrentRoom = (room:any) => {
  return {
    type: SET_CURRENT_ROOM,
    payload:room,
  };
};

export const setMessageHistory = (messageHistory: any[]) => {
    return {
      type: SET_MESSAGE_HISTORY,
      payload:messageHistory,
    };
  };

  export const updateMessageHistory = (message: Message) => {
    return {
      type: UPDATE_MESSAGE_HISTORY,
      payload:message,
    };
  };


// export const login = async (userDetails: UserProfile) => {
//   const [data, error] = await APILogin(userDetails);
//   if (error) console.log(error);
//   store.dispatch(updateProfile(data));
// };

export const getMessageHistory = async (roomId: string) =>{
  const [data, error] = await APIGetMessageHistory(roomId);
  if(error){ 
    console.log(error);
    return;
  };
  console.log(data,"@@response ko data")
  store.dispatch(setMessageHistory(data.messages));
}