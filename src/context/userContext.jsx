import { createContext, useState } from "react";
import Router from "../Router";
export const UserContext = createContext();

const UserContextProvider = () => {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [leftView, setLeftView] = useState("UserList");
  const [groupList, setGroupList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [currGroup, setcurrGroup] = useState({});

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        messages: messages,
        setMessages: setMessages,
        leftView: leftView,
        setLeftView: setLeftView,
        groupList: groupList,
        setGroupList: setGroupList,
        currGroup: currGroup,
        setcurrGroup: setcurrGroup,
        userList: userList,
        setUserList: setUserList,
      }}
    >
      <Router />
    </UserContext.Provider>
  );
};

export default UserContextProvider;
