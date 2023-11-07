import "../../styles/home/message-window.css";

const MessageWindow = () => {
  function clearMessageInput() {
    const message = document.getElementById("message");
    message.value = "";
  }
  async function postMessage(id, e) {
    if (e) {
      e.preventDefault();
    }

    const formData = new FormData(document.getElementById("message-form"));
    const data = new URLSearchParams(formData);
    const res = await fetch(`http://localhost:3001/user/create-message/${id}`, {
      method: "POST",
      mode: "cors",
      body: data,
    });

    console.log(await res.json());

    // return await res;
  }

  return (
    <>
      <section id="message-window">
        <form
          id="message-form"
          onSubmit={(e) => {
            if (sessionStorage.id) {
              postMessage(sessionStorage.id, e);
              clearMessageInput();
            } else {
              return;
            }
          }}
        >
          <label htmlFor="message">
            <input type="text" id="message" name="message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default MessageWindow;
