export function messageFormat(username, message, messageId, date, time) {
  const today = new Date().toLocaleDateString();

  return (
    <div key={messageId} className="message-container">
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
