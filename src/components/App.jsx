import React, { Component } from 'react';
import { Container } from './App.styled';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import Contacts from './Phonebook/ContactsList/ContactList';
import Filter from './Phonebook/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = data => {
    console.log('onSubmit', data);
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

  onFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  onFilterContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    console.log(filteredContacts);
    return filteredContacts
  };

  render() {
    console.log('render contacts', this.state.contacts);
    return (
      <Container>
        <Phonebook onSubmit={this.onFormSubmit} title="Phonebook"></Phonebook>
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
