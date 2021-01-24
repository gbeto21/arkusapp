import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.idContact = props.match.params.id;
  }

  componentDidMount() {
    console.log("IdParam: ", this.idContact);
    this.props.getContact(this.idContact);
    console.log("Props contact detail.", this.props);
  }

  render() {
    return (
      <div>
        <label>First name: </label>
        <label>{this.props.contactDetail.first_name}</label>
        <label>Last name: </label>
        <label>{this.props.contactDetail.last_name}</label>
        <label>Email: </label>
        <label>{this.props.contactDetail.email}</label>
        <img src={this.props.contactDetail.avatar} />
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.contactsReducer;
};

export default connect(mapStateToProps, actions)(ContactDetail);
