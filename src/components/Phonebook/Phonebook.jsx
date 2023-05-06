import { Component } from 'react';
import { PhonebookContainer, PhonebookTitle } from './Phonebook.styled';
import { ContactAddForm } from './ContactAddForm/ContactAddForm';
export class Phonebook extends Component {
  
  render() {
    return (
      <PhonebookContainer>
        <PhonebookTitle>{this.props.title}</PhonebookTitle>
        <ContactAddForm
          contacts={this.props.contacts}
          onSubmit={this.props.onSubmit}
        ></ContactAddForm>
      </PhonebookContainer>
    );
  }
}
