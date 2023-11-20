import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { PropTypes } from "prop-types";
import "../../../styles/leftView/group-list.css";

const GroupList = (props) => {
  const { setLeftView } = props;
  const { groupList, currGroup } = useContext(UserContext);

  GroupList.propTypes = {
    leftView: PropTypes.string,
    setLeftView: PropTypes.func,
  };

  return (
    <>
      <div id="group-list">
        <button onClick={() => setLeftView("UserList")}>User List</button>
        <button onClick={() => console.log(groupList, currGroup)}>
          Groups
        </button>
        <button onClick={() => setLeftView("GroupListForm")}>
          Create Group
        </button>
        <ul id="groups">
          {groupList[0] &&
            groupList.map((group) => {
              return (
                <li
                  key={group._id}
                  data-id={group._id}
                  onClick={(e) => console.log(e.currentTarget.dataset.id)}
                >
                  {group.name}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default GroupList;
