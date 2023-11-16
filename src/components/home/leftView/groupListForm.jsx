import PropTypes from "prop-types";

const GroupListForm = (props) => {
  const { setLeftView } = props;

  GroupListForm.propTypes = {
    setLeftView: PropTypes.func,
  };

  async function postCreateGroup(e) {
    if (e) {
      e.preventDefault();
    }

    const formData = new FormData(document.getElementById("group-list-form"));
    const data = new URLSearchParams(formData);
    const res = await fetch("http://localhost:3001/group/create", {
      method: "POST",
      mode: "cors",
      body: data,
    });

    return await res;
  }

  return (
    <div>
      <form id="group-list-form">
        <label htmlFor="groupname">
          <input id="groupname" name="groupname" type="text"></input>
        </label>
        <button onClick={(e) => postCreateGroup(e)}>Create</button>
      </form>
      <button onClick={() => setLeftView("GroupList")}>Group List</button>
    </div>
  );
};

export default GroupListForm;
