async function accountPostData(e, url, id) {
  if (e) {
    e.preventDefault();
  }
  const formData = new FormData(document.getElementById(id));
  const data = new URLSearchParams(formData);
  const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    body: data,
  });

  return await res;
}

export async function createUser(e) {
  return await accountPostData(
    e,
    "http://localhost:3001/user/signup",
    "account-form"
  );
}

export async function login(e) {
  return await accountPostData(
    e,
    "http://localhost:3001/user/login",
    "account-form"
  );
}

export function fillUserInfo() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  username.value = "Bug";
  password.value = "testing";
}
