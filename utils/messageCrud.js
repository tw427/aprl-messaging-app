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

export async function deleteMessage(
  setMessages,
  currGroup,
  messageId,
  groupId
) {
  const res = await fetch(
    `http://localhost:3001/message/delete/${groupId}/${messageId}/`,
    {
      method: "POST",
      mode: "cors",
    }
  );
  console.log(await res.json());
  updateMessages(setMessages, currGroup);
}
