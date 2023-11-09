import "../../styles/home/chat-window.css";
import { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  async function getUserMessages() {
    if (sessionStorage.id) {
      const res = await fetch(
        `http://localhost:3001/user/${sessionStorage.id}/messages/`,
        {
          method: "GET",
          mode: "cors",
        }
      );

      setMessages(await res.json());
    }
    return;
  }

  return (
    <>
      <main id="chat-window">
        <button
          onClick={async () => {
            await getUserMessages();
            console.log(messages);
          }}
        >
          Messages
        </button>
        {messages.map((message) => (
          <p key={message._id}>
            {message.author.username} | {message.message} | {message.date}{" "}
            {message.time}
          </p>
        ))}
      </main>
    </>
  );
};

export default ChatWindow;
