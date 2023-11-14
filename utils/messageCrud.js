export async function updateMessages(setMessages) {
  const res = await fetch(
    `http://localhost:3001/user/${sessionStorage.id}/messages/`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  setMessages(await res.json());
}

export async function deleteMessage(setMessages, messageId) {
  await fetch(`http://localhost:3001/user/message/delete/${messageId}/`, {
    method: "POST",
    mode: "cors",
  });

  updateMessages(setMessages);
}
