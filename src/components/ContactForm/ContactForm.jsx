import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'


export default function ContactList({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationControl = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(12, "Too long")
      .required("Required"),
  });

  const initialContact = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={validationControl}>
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name: </label>
          <Field
            id={nameFieldId}
            type="text"
            name="name"
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.form}>
          <label htmlFor={numberFieldId}>Number: </label>
          <Field
            id={numberFieldId}
            type="tel"
            name="number"
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.btnAddContact} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
