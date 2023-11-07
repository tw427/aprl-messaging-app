import "../../styles/home/chat-window.css";
import { useState, useEffect } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    async function getUserMessages() {
      if (sessionStorage.id) {
        const res = await fetch(
          `http://localhost:3001/user/${sessionStorage.id}/messages`,
          {
            method: "GET",
            mode: "cors",
          }
        );
        setMessages(await res.json());
      }
      return;
    }

    getUserMessages();
  }, []);

  return (
    <>
      <main id="chat-window">
        <button
          onClick={() => {
            console.log(messages);
          }}
        >
          Messages
        </button>
      </main>
    </>
  );
};

export default ChatWindow;
