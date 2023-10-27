import { createContext, useState } from "react";
import App from "../App";
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
      <App />
    </UserContext.Provider>
  );
};

export default UserContextProvider;
