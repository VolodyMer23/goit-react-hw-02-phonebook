import { HiTrash, } from 'react-icons/hi';
import {
  ContactsWrapper,
  ContactsTitle,
  ContactsItem,
  DeleteBtn,
} from './ContactList.styled';

function Contacts({ title, contacts, onDelete }) {
  console.log('ContactList:', contacts);
  console.log('ContactList:', onDelete);
  return (
    <ContactsWrapper>
      <ContactsTitle>{title}</ContactsTitle>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <ContactsItem key={id}>
              <p>{name}:</p>
              <p>{number}</p>
              <button aria-label="Delete" onClick={() => onDelete(id)}>
                <DeleteBtn />
              </button>
            </ContactsItem>
          );
        })}
      </ul>
    </ContactsWrapper>
  );
}

export default Contacts;
