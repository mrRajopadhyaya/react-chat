import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import socket from "../socketConnection";
import { updateMessageHistory } from "../store/Room/action";
import { ReactComponent as SendIcon } from "../utils/images/send.svg";
import { ReactComponent as EmojiIcon } from "../utils/images/emoji.svg";
import { ReactComponent as AttachIcon } from "../utils/images/attach.svg";

const MessageInputBar = () => {
  const [chatMessage, setChatMessage] = useState("");
  const currentRoom = useSelector((state: any) => state.room.currentRoom);
  const userProfile = useSelector((state: any) => state.user.profile);
  const dispatch = useDispatch();
  console.log(`currentRoom`, currentRoom);
  const sendMessage = () => {
    if (!chatMessage) return;
    socket.emit("chat", {
      roomId: currentRoom._id,
      message: chatMessage,
      user: userProfile._id,
    });
    setChatMessage("");
    dispatch(
      updateMessageHistory({
        body: chatMessage,
        room: currentRoom._id,
        user: userProfile._id,
        seen: false,
      })
    );
  };
  return (
    <div>
      <div className="flex flex-row items-center h-16 sticky bottom-0 bg-white w-full px-4">
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <AttachIcon />
        </button>
        <div className="flex-grow ml-4">
          <div className="relative w-full">
            <input
              type="text"
              value={chatMessage}
              className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
              <EmojiIcon />
            </button>
          </div>
        </div>
        <div className="ml-4">
          <button
            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
            onClick={sendMessage}
          >
            <span>Send</span>
            <span className="ml-2">
              <SendIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInputBar;
