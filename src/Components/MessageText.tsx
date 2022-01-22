import { useSelector } from "react-redux";
import { Message } from "../interface/RoomState";

interface MessageTextProps {
  message: Message;
}

const MessageText = (props: MessageTextProps) => {
  const userProfile = useSelector((state: any) => state.user.profile);
  const { message } = props;
  return (
    <div className={` single-message p-3 rounded-lg`}>
      <div
        className={`flex flex-row items-center ${
          message.user._id === userProfile._id ? "justify-end" : ""
        }`}
      >
        {message.user._id !== userProfile._id && (
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            <img className="rounded-full" src={message.user.photoURL} alt="" />
          </div>
        )}
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{message.body}</div>
          <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
            Seen
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageText;

/*<div className="col-start-6 col-end-13 p-3 rounded-lg">
<div className="flex items-center justify-start flex-row-reverse">
  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
    A
  </div>
  <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
    <div>
      Lorem ipsum dolor sit, amet consectetur
      adipisicing. ?
    </div>
    <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
      Seen
    </div>
  </div>
</div>
</div>*/
