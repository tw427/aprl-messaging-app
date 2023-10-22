export async function createUser(e) {
  e.preventDefault();
  const formData = new FormData(document.getElementById("account-form"));
  const data = new URLSearchParams(formData);
  await fetch("http://localhost:3001/user/signup", {
    method: "POST",
    mode: "cors",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
