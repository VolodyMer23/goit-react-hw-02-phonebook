import { Component } from 'react';
import {
  PhonebookContainer,
  PhonebookTitle,
  PhonebookInput,
  InputWrapper,
  AddContactBtn,
  Form,
} from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <PhonebookContainer>
        <PhonebookTitle>{this.props.title}</PhonebookTitle>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <PhonebookInput
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
          </InputWrapper>
          <InputWrapper>
            <PhonebookInput
              type="tel"
              name="number"
              id="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={handleChange}
            />
            <label htmlFor="number">Number</label>
          </InputWrapper>

          <AddContactBtn>Add Contact</AddContactBtn>
        </Form>
      </PhonebookContainer>
    );
  }
}
