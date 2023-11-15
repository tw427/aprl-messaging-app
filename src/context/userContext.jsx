import { createContext, useState } from "react";
import Router from "../Router";
export const UserContext = createContext();

const UserContextProvider = () => {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [showUserList, setShowUserList] = useState(true);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        messages: messages,
        setMessages: setMessages,
        showUserList: showUserList,
        setShowUserList: setShowUserList,
      }}
    >
      <Router />
    </UserContext.Provider>
  );
};

export default UserContextProvider;
