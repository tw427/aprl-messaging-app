export async function createUser(e) {
  if (e) {
    e.preventDefault();
  }
  const formData = new FormData(document.getElementById("account-form"));
  const data = new URLSearchParams(formData);
  const res = await fetch("http://localhost:3001/user/signup", {
    method: "POST",
    mode: "cors",
    body: data,
  });

  return await res;
}

export async function login(e) {
  if (e) {
    e.preventDefault();
  }

  const formData = new FormData(document.getElementById("account-form"));
  const data = new URLSearchParams(formData);
  const res = await fetch("http://localhost:3001/user/login", {
    method: "POST",
    mode: "cors",
    body: data,
  });

  return await res;
}

export function fillUserInfo() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  username.value = "Bug";
  password.value = "testing";
}
