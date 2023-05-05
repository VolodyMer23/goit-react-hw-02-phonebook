import styled from '@emotion/styled';
import { Delete } from '@styled-icons/fluentui-system-filled/Delete';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 24px;
`;

export const ContactsTitle = styled.h2`
  font-size: 36px;
  color: #377d6a;
  margin: 0;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style: none;
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  color: #377d6a;
  margin: 0;
`;

export const DeleteBtn = styled(Delete)`
  color: red;

  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`