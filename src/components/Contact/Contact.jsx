import { BiSolidUser } from 'react-icons/bi';
import { MdOutlinePhoneIphone } from 'react-icons/md';

import styles from './Contact.module.css';

const Contact = ({ user, onDelete }) => {
  const { name, number, id } = user;

  const nameFormater = fullName => {
    if (fullName.length <= 20) return fullName;
    else return fullName.slice(0, 20).padEnd(23, '.');
  };

  return (
    <>
      <div className={styles.details}>
        <p className={styles.info}>
          <BiSolidUser className={styles.icon} />
          {nameFormater(name)}
        </p>

        <p className={styles.info}>
          <MdOutlinePhoneIphone className={styles.icon} />
          {number}
        </p>
      </div>

      <button
        onClick={() => {
          onDelete(id);
        }}
        className={styles.btn}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
