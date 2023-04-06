// import { useState } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';

// import { AiOutlineDelete } from 'react-icons/ai';
// import { toast } from 'react-hot-toast';
// import PropTypes from 'prop-types';

// import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/operations';
import {
  // Button,
  ContactInfo,
  Name,
  Number,
  // Spinner,
  UserIcon,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  // const [contactId, setContactId] = useState(null);

  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    // setContactId(contact.id);

    // if (!error) {
    //   toast.success(`Contact ${contact.name} successfully deleted`);
    // }
  };

  return (
    <>
      <UserIcon />
      <ContactInfo>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </ContactInfo>

      {/* {isLoading && contactId === contact.id ? (
        <Spinner size={40} />
      ) : (
        <Button type="button" onClick={handleDelete} disabled={isLoading}>
          <AiOutlineDelete size={20} />
        </Button>
      )} */}
    </>
  );
};

// ContactListItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };

export default ContactListItem;
