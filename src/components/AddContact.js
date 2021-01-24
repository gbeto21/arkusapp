import React from "react";

const AddContact = (props) => {
  return (
    <React.Fragment>
      <form>
        <label htmlFor="first_name">First name:</label>
        <input
          id="first_name"
          element="input"
          type="text"
          label="first_name"
          onChange={props.onNameChange}
        />
        <label htmlFor="work">Work:</label>
        <input
          id="work"
          element="input"
          type="text"
          label="work"
          onChange={props.onWorkChange}
        />
      </form>
      <button onClick={props.onSaveContact}>Save</button>
    </React.Fragment>
  );
};

export default AddContact;
