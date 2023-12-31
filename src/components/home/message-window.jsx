import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "../../styles/home/message-window.css";
import { updateMessages } from "../../../utils/messageCrud";

const MessageWindow = () => {
  const { setMessages, currGroup } = useContext(UserContext);

  function clearMessageInput() {
    const message = document.getElementById("message");
    message.value = "";
  }

  function formatTime() {
    const timeSplit = new Date().toLocaleTimeString().split(" ");
    const time = timeSplit[0].substring(0, timeSplit[0].length - 3);
    return time + " " + timeSplit[1];
  }

  async function postMessage(id, e, updateMessages) {
    if (e) {
      e.preventDefault();
    }

    const date = new Date().toLocaleDateString();
    const time = formatTime();

    const formData = new FormData(document.getElementById("message-form"));
    const data = new URLSearchParams(formData);
    const res = await fetch(
      `http://localhost:3001/message/create-message/${currGroup._id}/${id}/${date}/${time}`,
      {
        method: "POST",
        mode: "cors",
        body: data,
      }
    );

    if (updateMessages) {
      updateMessages(setMessages, currGroup);
    }

    return await res;
  }

  return (
    <>
      <section id="message-window">
        <form
          id="message-form"
          onSubmit={(e) => {
            if (sessionStorage.id) {
              postMessage(sessionStorage.id, e, updateMessages);
              clearMessageInput();
            } else {
              return;
            }
          }}
        >
          <label htmlFor="message">
            <textarea type="text" id="message" name="message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default MessageWindow;
