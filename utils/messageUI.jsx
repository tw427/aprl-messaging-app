import { deleteMessage } from "./messageCrud";

export function messageFormat(
  username,
  message,
  messageId,
  date,
  time,
  setMessages,
  currGroup
) {
  const today = new Date().toLocaleDateString();

  return (
    <div key={messageId} className="message-container">
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteMessage(setMessages, currGroup, messageId);
        }}
      >
        Delete
      </button>
      <div
        className="message-bubble"
        data-active-user={`${
          username === sessionStorage.username ? "true" : "false"
        }`}
      >
        <div className="message-header">
          <p className="message-author">{username}</p>
          <p className="message-date-time">
            {today === date ? "Today" : date} {"at"} {time}
          </p>
        </div>
        <p className="message-text">{message}</p>
      </div>
    </div>
  );
}
