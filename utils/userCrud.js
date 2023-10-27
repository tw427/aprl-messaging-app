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

// Depending on if the login fetch is successful
// if Successful we will reroute our users into the Home component
// if Fail we will not reroute our user, and instead throw back an error message

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
