import { UserList, GroupList, GroupListForm } from "../home/modules";

export function leftViewController(state, setState) {
  let component = {};

  switch (state) {
    case "UserList":
      component = <UserList setLeftView={setState}></UserList>;
      break;
    case "GroupList":
      component = <GroupList setLeftView={setState}></GroupList>;
      break;
    case "GroupListForm":
      component = <GroupListForm setLeftView={setState}></GroupListForm>;
      break;
  }

  return component;
}
