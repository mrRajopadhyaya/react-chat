import axios from '../Config/axios';

const BASE_PATH = '/room';

export const APICreatePrivateRoom = async (selectedUserId:string) => {
  try {
    const data = await axios.post(`${BASE_PATH}/private-room`, {selectedUser: selectedUserId});
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const APIGetMessageHistory = async (roomId:string) => {
  try {
    const data = await axios.get(`${BASE_PATH}/message-history/${roomId}`);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const APIGetAllRooms = async () => {
  try {
    const data = await axios.get(`${BASE_PATH}`);
    return [data.data.rooms, null]
  } catch (error) {
    return [null, error];
  }
}