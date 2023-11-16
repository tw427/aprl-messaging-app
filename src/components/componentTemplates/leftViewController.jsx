import { UserList, GroupList } from "../home/modules";

export function leftViewController(state, setState) {
  let component = {};

  switch (state) {
    case "UserList":
      component = <UserList setLeftView={setState}></UserList>;
      break;
    case "GroupList":
      component = <GroupList setLeftView={setState}></GroupList>;
      break;
  }

  return component;
}
