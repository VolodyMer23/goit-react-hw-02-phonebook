import React, { Component } from 'react';
import { Container } from './App.styled';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import Contacts from './Phonebook/ContactsList/ContactList';
import Filter from './Phonebook/Filter/Filter';
import ContactsData from './Phonebook/Data/ContactsData.json';


export class App extends Component {
  state = {
    contacts: ContactsData,
    filter: '',
  };

  nameCheker = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  onFormSubmit = data => {
    if (this.nameCheker(data.name)) {
      return alert(`${data.name} is already in contacts.`);
    }
    this.setState(prevState => {
      const contactId = nanoid();
      return {
        contacts: prevState.contacts.concat({ ...data, id: contactId }),
      };
    });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onFilterContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  render() {
    return (
      <Container>
        <Phonebook
          contacts={this.onFilterContact()}
          onSubmit={this.onFormSubmit}
          title="Phonebook"
        ></Phonebook>
        <Filter
          value={this.state.filter}
          onChange={this.onFilterChange}
        ></Filter>
        <Contacts
          title="Contacts"
          contacts={this.onFilterContact()}
          onDelete={this.onDeleteContact}
        ></Contacts>
      </Container>
    );
  }
}
