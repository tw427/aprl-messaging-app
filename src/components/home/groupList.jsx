import { PropTypes } from "prop-types";

const GroupList = (props) => {
  const { showUserList, setShowUserList } = props;

  GroupList.propTypes = {
    showUserList: PropTypes.string,
    setShowUserList: PropTypes.func,
  };
  return (
    <>
      <div id="group-list">
        <button onClick={() => setShowUserList(!showUserList)}>
          User List
        </button>
      </div>
    </>
  );
};

export default GroupList;
