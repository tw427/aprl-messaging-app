import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";
import { PropTypes } from "prop-types";
import { useGroupData } from "../../../hooks/groupListHooks";

const GroupList = (props) => {
  const { setLeftView } = props;
  const { setGroupList } = useContext(UserContext);
  const groupList = useGroupData();

  GroupList.propTypes = {
    leftView: PropTypes.string,
    setLeftView: PropTypes.func,
  };

  useEffect(() => {
    setGroupList(async () => await groupList);
  }, []);

  return (
    <>
      <div id="group-list">
        <button onClick={() => setLeftView("UserList")}>User List</button>
        <button onClick={async () => console.log(await groupList)}>
          Groups
        </button>
        <button onClick={() => setLeftView("GroupListForm")}>
          Create Group
        </button>
      </div>
    </>
  );
};

export default GroupList;
