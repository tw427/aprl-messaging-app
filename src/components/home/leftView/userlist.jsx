import PropTypes from "prop-types";
import "../../../styles/leftView/user-list.css";

const UserList = (props) => {
  const { setLeftView } = props;

  UserList.propTypes = {
    leftView: PropTypes.string,
    setLeftView: PropTypes.func,
  };

  return (
    <>
      <section id="user-list">
        <button onClick={() => setLeftView("GroupList")}>Group List</button>
        <div className="userlist-user">User List 1</div>
        <div className="userlist-user">User List 2</div>
        <div className="userlist-user">User List 3</div>
      </section>
    </>
  );
};

export default UserList;
