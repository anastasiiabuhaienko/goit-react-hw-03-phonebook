import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';


const ContactsList = ({ contacts, onDeleteContact }) => {
    
    return (
        <ul className={css.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <ContactsListItem
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                    key={id}
                />
            ))}
        </ul>
    )
};


export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func,
};