import { createContext, useState } from "react";
import Router from "../Router";
export const UserContext = createContext();

const UserContextProvider = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <Router />
    </UserContext.Provider>
  );
};

export default UserContextProvider;
