import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { APIGetFriendsList } from "../API/friends";
import { APICreatePrivateRoom } from "../API/room";
import socket from "../socketConnection";
import { getMessageHistory, updateCurrentRoom } from "../store/Room/action";

export default function AppSideBar() {
  const [friendsList, setFriendsList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const [response, error] = await APIGetFriendsList();
      console.log(response, "@respoinse");
      setFriendsList(response.friendsList);
    })();
  }, []);

  const createPrivateChat = async (selectedUserId: string) => {
    const [response, error] = await APICreatePrivateRoom(selectedUserId);
    const room = response?.room ?? "";
    console.log(`test-room`, room);
    socket.emit("join-room", { roomId: room._id });
    dispatch(updateCurrentRoom(room));
    getMessageHistory(room._id);
  };
  return (
    <div className="h-full flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="flex flex-col top-0 left-0 bg-white h-full border-r">
        <div className="col-span-1 bg-white border-r border-gray-300">
          <div className="my-3 mx-3 ">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-gray-500"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input
                placeholder="Search conversation"
                className="py-2 pl-10 block w-full rounded bg-gray-100 outline-none focus:text-gray-700"
                type="search"
                name="search"
                required
              />
            </div>
          </div>

          <ul className="overflow-auto">
            <h2 className="ml-2 mb-2 text-gray-600 text-lg my-2">Chats</h2>

            {friendsList.map((user: any) => {
              return (
                <li
                  className="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                  onClick={() => createPrivateChat(user._id)}
                >
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={user.photoURL}
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-base text-gray-600 ">
                        {user.displayName}
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        5 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      {user.email}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
