import { Formik, Field, Form, ErrorMessage } from 'formik';
import { firstValidationSchema } from '../../../utils/validation';

// In this case, we are using Form and the Field and ErrorMessage components from Formik.
// These components are used to render the form and the form fields, respectively.
// The Field component is used to render the form fields, and the ErrorMessage component
// is used to render the error messages.
// This helps reduce boilerplate code and makes it easier cause it is more declarative.

// Check this folder (03) to see the props of these components

const UsingMoreFormikComponents = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={firstValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UsingMoreFormikComponents
