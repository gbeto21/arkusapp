import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import AddContact from "../../components/AddContact";
import { Link } from "react-router-dom";
import "./styles.scss";
import "../../sass/buttons.scss";

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
        <div className="toolBarContainer">
          <button className="mainButton" onClick={this.showModalAddContact}>
            Agregar
          </button>
        </div>
        {this.state.showModal && (
          <div className="addContactContainer">
            <AddContact
              onNameChange={this.onNameChange}
              onWorkChange={this.onWorkChange}
              onSaveContact={this.onSaveContact}
            />
          </div>
        )}
        {createContactList(this.props.contacts)}
      </div>
    );
  }
}

const createContactList = (contacts) => {
  const contactsItems = contacts.map((contact) => (
    <li className="linkItem">
      <Link className="linkItem" to={`/details/${contact.id}`}>
        {" "}
        {contact.first_name}
      </Link>
    </li>
  ));

  return <ol>{contactsItems}</ol>;
};

const mapStateToProps = (reducers) => {
  return reducers.contactsReducer;
};

export default connect(mapStateToProps, actions)(ContactList);
