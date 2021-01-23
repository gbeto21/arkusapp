import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return <div>{createContactList(this.props.contacts)}</div>;
  }
}

const createContactList = (contacts) => {
  const contactsItems = contacts.map((contact) => (
    <li>{contact.first_name}</li>
  ));

  return <ul>{contactsItems}</ul>;
};

const mapStateToProps = (reducers) => {
  return reducers.contactsReducer;
};

export default connect(mapStateToProps, actions)(ContactList);
