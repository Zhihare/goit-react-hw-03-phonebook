import { Component } from "react"
import ContactsForm from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { ConteinerApp, ContentApp, TitleApp } from "./AppStyle";
import Modal from "./Modal/Modal";
import ModalDelete from "./ModalDelete/ModalDelete";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    modal: {
      isOpen: false,
      data: null,
    },
    modalDelete: {
      isOpen: false,
      data: null,
    }
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

  onOpenModal = (modalData) => {
    this.setState({
      modal: {
        isOpen: true,
        data: modalData,
      },
    });
  }

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        data: null,
      },
    });
  }

  onOpenModalDelete = (modalDataDelete) => {
    this.setState({
      modalDelete: {
        isOpen: true,
        data: modalDataDelete,
      },
    });
  }

  onCloseModalDelete = () => {
    this.setState({
      modalDelete: {
        isOpen: false,
        data: null,
      },
    });
  }


  render() {

    return (
      <ConteinerApp>
        <ContentApp>
          <TitleApp title="Phonebook">Phonebook</TitleApp>
          <ContactsForm handleAddContact={this.handleAddContact}
            onOpenModal={this.onOpenModal} />
          <TitleApp>Contacts</TitleApp>
          <Filter value={this.state.filter} filter={this.changeFilter} />
          <ContactsList
            renderFilter={this.getContacts()}
            onOpenModalDelete={this.onOpenModalDelete}
          />
          {this.state.modal.isOpen && <Modal
            newContactName={this.state.modal.data}
            onCloseModal={this.onCloseModal} />}

          {this.state.modalDelete.isOpen && <ModalDelete
            handleDelete={this.handleDelete}
            deleteContact={this.state.modalDelete.data}
            onCloseModalDelete={this.onCloseModalDelete} />}
        </ContentApp>
      </ConteinerApp>


    );
  };
}
