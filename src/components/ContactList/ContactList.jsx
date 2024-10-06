import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length === 0 && <h3>Your contact list is empty</h3>}

      <ul className={styles.user_list}>
        {contacts.map(user => {
          return (
            <li className={styles.user_card} key={user.id}>
              <Contact user={user} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
