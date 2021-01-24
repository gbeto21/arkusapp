import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import AddContact from "../../components/AddContact";
import { Link } from "react-router-dom";

class ContactList extends Component {
  state = {
    showModal: false,
    contactFirstName: "",
    contactWork: "",
  };

  showModalAddContact = () => {
    this.setState({ showModal: true });
  };

  onSaveContact = (event) => {
    const { contactFirstName, contactWork } = this.state;
    this.props.addContact({
      name: contactFirstName,
      work: contactWork,
    });
    console.log("Save Event", event);
    console.log("State before save:", this.state);
    this.setState({ showModal: false });
  };

  componentDidMount() {
    this.props.getContacts();
  }

  onNameChange = (event) => {
    this.setState({ contactFirstName: event.target.value });
  };

  onWorkChange = (event) => {
    this.setState({ contactWork: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.showModal && (
          <AddContact
            onNameChange={this.onNameChange}
            onWorkChange={this.onWorkChange}
            onSaveContact={this.onSaveContact}
          />
        )}
        <button onClick={this.showModalAddContact}>Agregar</button>
        {createContactList(this.props.contacts)}
      </div>
    );
  }
}

const createContactList = (contacts) => {
  const contactsItems = contacts.map((contact) => (
    <li>
      <Link to={`/details/${contact.id}`}> {contact.first_name}</Link>
    </li>
  ));

  return <ul>{contactsItems}</ul>;
};

const mapStateToProps = (reducers) => {
  return reducers.contactsReducer;
};

export default connect(mapStateToProps, actions)(ContactList);
