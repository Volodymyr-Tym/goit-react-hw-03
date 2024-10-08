import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

import { AddContactSchema } from '../../utils/schemas';

import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const INITIAL_VALUES = { name: '', number: '' };

  const handleSubmit = (values, actions) => {
    onAddContact({
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.label_title}>Name</span>

          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder="John Smith"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="name"
            component="span"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.label_title}>Number</span>

          <Field
            className={styles.input}
            type="text"
            name="number"
            placeholder="000-00-00"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="number"
            component="span"
          />
        </label>

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
