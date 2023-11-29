import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import "../../../styles/leftView/user-list.css";
import { useUserList } from "../../../hooks/userListHooks";

const UserList = (props) => {
  const { setLeftView } = props;
  const { userList, setUserList } = useContext(UserContext);

  UserList.propTypes = {
    leftView: PropTypes.string,
    setLeftView: PropTypes.func,
  };

  useUserList()
    .then((data) => {
      setUserList(data);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <section id="user-list">
        <button onClick={() => setLeftView("GroupList")}>Group List</button>
        <ul id="users">
          {userList[0] &&
            userList.map((user) => {
              return (
                <li key={user._id} data-userid={user._id}>
                  {user.username}
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default UserList;
