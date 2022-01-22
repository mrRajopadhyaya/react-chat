import axios from '../Config/axios';

const BASE_PATH = '/friends';

export const APIGetFriendsList = async () => {
  try {
    const data = await axios.get(`${BASE_PATH}/`,);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const APIGetFriendSuggestion = async () => {
  try {
    const data = await axios.get(`${BASE_PATH}/friend-suggestion`,);
    return [data.data, null];
  } catch (error) {
    return [null, error];
  }
};