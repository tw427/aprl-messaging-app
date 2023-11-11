export function messageFormat(username, message, messageId, date, time) {
  return (
    <div key={messageId} className="message-container">
      <div className="message-bubble">
        <p
          className="message-author"
          data-active-user={`${
            username === sessionStorage.username ? "true" : "false"
          }`}
        >
          {username}
        </p>
        <p className="message-text">{message}</p>
        <p className="message-date-time">
          {date} {time}
        </p>
      </div>
    </div>
  );
}
