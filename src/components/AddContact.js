import React from "react";
import './styles.scss'
import '../sass/buttons.scss'

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
      <button className='mainButton' onClick={props.onSaveContact}>Save</button>
    </React.Fragment>
  );
};

export default AddContact;
