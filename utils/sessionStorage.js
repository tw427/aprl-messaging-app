export function populateOnLogin(details) {
  if (!sessionStorage.getItem("username")) {
    console.log(details);
    sessionStorage.setItem("id", details.user._id);
    sessionStorage.setItem("username", details.user.username);
  }
  return;
}

export function sessionGetUser() {
  const id = sessionStorage.getItem("id");
  const username = sessionStorage.getItem("username");

  return {
    id: id,
    username: username,
  };
}

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.name === 22 ||
        // Firefox
        e.name === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
