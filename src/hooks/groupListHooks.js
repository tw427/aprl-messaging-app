import { useEffect, useState } from "react";

export async function useGroupData() {
  const [groupData, setGroupData] = useState({});

  useEffect(() => {
    let ignore = false;
    fetch(`http://localhost:3001/group/list`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setGroupData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  return groupData;
}
