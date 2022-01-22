import { useEffect } from "react";
import { useSelector } from "react-redux";

import MessageText from "../Components/MessageText";
import { Message } from "../interface/RoomState";

import MessageHeader from "../Components/MessageHeader";
import MessageInputBar from "../Components/MessageInputBar";
import { useParams } from "react-router";
import { getMessageHistory } from "../store/Room/action";

export default function Home() {
  const { conversationId } = useParams() as any;
  const messageHistory = useSelector((state: any) => state.room.messageHistory);
  useEffect(() => {
    (async () => {
      await getMessageHistory(conversationId);
    })();
  }, [conversationId]);

  return (
    <>
      <MessageHeader />
      <div className="chat-container">
        {messageHistory.map((message: Message) => (
          <MessageText message={message} />
        ))}
      </div>
      <MessageInputBar />
    </>
  );
}
