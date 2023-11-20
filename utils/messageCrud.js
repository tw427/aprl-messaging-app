export async function updateMessages(setMessages, currGroup) {
  if (currGroup === undefined) {
    return;
  } else if (currGroup._id) {
    const res = await fetch(
      `http://localhost:3001/group/${currGroup._id}/message/history`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    setMessages(await res.json());
  }
}

export async function deleteMessage(setMessages, messageId) {
  await fetch(`http://localhost:3001/user/message/delete/${messageId}/`, {
    method: "POST",
    mode: "cors",
  });

  updateMessages(setMessages);
}
