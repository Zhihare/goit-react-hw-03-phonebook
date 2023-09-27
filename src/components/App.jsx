import { Component } from "react"
import ContactsForm from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { ConteinerApp, ContentApp, TitleApp } from "./AppStyle";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }


  handleAddContact = contactsData => {

    if (this.state.contacts.some(contact => contact.name === contactsData.name || contact.number === contactsData.number)) {
      alert(`${contactsData.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactsData],
      };
    });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };


  handleDelete = contactName => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.name !== contactName),
      };
    });
  };


  render() {

    return (
      <ConteinerApp>
        <ContentApp>
          <TitleApp title="Phonebook">Phonebook</TitleApp>
          <ContactsForm handleAddContact={this.handleAddContact} />
          <TitleApp>Contacts</TitleApp>
          <Filter value={this.state.filter} filter={this.changeFilter} />
          <ContactsList
            handleDelete={this.handleDelete}
            renderFilter={this.getContacts()}
          />
        </ContentApp>
      </ConteinerApp>
    );
  };
}
