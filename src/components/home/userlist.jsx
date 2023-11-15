import PropTypes from "prop-types";
import "../../styles/home/user-list.css";

const UserList = (props) => {
  const { toggleView } = props;

  UserList.propTypes = {
    toggleView: PropTypes.func,
  };

  return (
    <>
      <section id="user-list">
        <button onClick={() => toggleView()}>Group List</button>
        <div className="userlist-user">User List 1</div>
        <div className="userlist-user">User List 2</div>
        <div className="userlist-user">User List 3</div>
      </section>
    </>
  );
};

export default UserList;
