import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  /*is used for selecting the part of the data from the store that the connected component needs.
   It's frequently referred to as just mapState for short. 
   It is called every time the store state changes.*/
  return {
    contacts: state.myContact.contacts,
  };
};

export default connect(mapStateToProps, { getContacts })(Contacts); // le 2ème paramètre permet d'envoyer des objets par props
