import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { PropTypes } from "prop-types";
import "../../../styles/leftView/group-list.css";
import { useGroupData } from "../../../hooks/groupListHooks";

const GroupList = (props) => {
  const { setLeftView } = props;
  const { groupList, currGroup, setGroupList, setcurrGroup } =
    useContext(UserContext);

  GroupList.propTypes = {
    leftView: PropTypes.string,
    setLeftView: PropTypes.func,
  };

  useGroupData()
    .then((data) => {
      setGroupList(data);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <section id="group-list">
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
                  data-groupid={group._id}
                  onClick={(e) => {
                    setcurrGroup(group);
                    console.log(e.currentTarget.dataset.groupid, group);
                  }}
                >
                  {group.name}
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default GroupList;
