import './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li>
      <div>
        <p>
          {contact.name}: {contact.phone}
        </p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
};
