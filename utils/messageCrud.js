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
