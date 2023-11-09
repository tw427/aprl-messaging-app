import "../../styles/home/chat-window.css";
// import { useState, useEffect } from "react";

const ChatWindow = () => {
  async function getUserMessages() {
    if (sessionStorage.id) {
      const res = await fetch(
        `http://localhost:3001/user/${sessionStorage.id}/messages/`,
        {
          method: "GET",
          mode: "cors",
        }
      );

      const messages = await res.json();
      console.log(messages);
      // return await res.json();
    }
    return;
  }

  return (
    <>
      <main id="chat-window">
        <button
          onClick={async () => {
            await getUserMessages();
          }}
        >
          Messages
        </button>
      </main>
    </>
  );
};

export default ChatWindow;
