import { useEffect, useState } from "react";

export async function useUserList() {
  const [userList, setUserList] = useState({});
  useEffect(() => {
    let ignore = false;
    fetch(`http://localhost:3001/user/list`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setUserList(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  return userList;
}
