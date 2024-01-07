import { ContactItem } from 'components/ContactItem/ContactItem';
import './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
