import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../context/userContext";
import "../../styles/home/chat-window.css";
import { updateMessages } from "../../../utils/messageCrud";
import { messageFormat } from "../../../utils/messageUI";

const ChatWindow = () => {
  const { messages, setMessages, currGroup } = useContext(UserContext);

  const chatBottom = useRef(null);

  useEffect(() => {
    updateMessages(setMessages, currGroup);
  }, [currGroup, setMessages]);

  useEffect(() => {
    chatBottom.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  return (
    <>
      <main id="chat-window">
        <button
          onClick={() => {
            console.log(messages);
            console.log(currGroup);
          }}
        >
          Messages
        </button>
        {messages[0] &&
          messages.map((message) =>
            messageFormat(
              message.author.username,
              message.message,
              message._id,
              message.date,
              message.time,
              setMessages,
              currGroup
            )
          )}
        <div ref={chatBottom}></div>
      </main>
    </>
  );
};

export default ChatWindow;
