import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import "../../styles/home/chat-window.css";
import { updateMessages } from "../../../utils/messageCrud";
import { messageFormat } from "../../../utils/messageUI";

const ChatWindow = () => {
  const { messages, setMessages } = useContext(UserContext);

  useEffect(() => {
    updateMessages(setMessages);
  }, []);

  return (
    <>
      <main id="chat-window">
        {/* <button
          onClick={() => {
            console.log(messages);
          }}
        >
          Messages
        </button> */}
        {messages.map((message) =>
          messageFormat(
            message.author.username,
            message.message,
            message._id,
            message.date,
            message.time,
            setMessages
          )
        )}
      </main>
    </>
  );
};

export default ChatWindow;
