// Formik use context api to reduce boilerplate and made it less verbose
// Main components:
// - Formik
// - Field
// - ErrorMessage
// - Form

import { Formik } from 'formik';
import { firstValidationSchema } from '../../../utils/validation';

const IntroductionFormikComponents = () => {
  // this replaces useFormik hook
  // using component Formik to do it more declarative
  // with render props pattern

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
      {({ errors, touched, getFieldProps, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...getFieldProps('firstName')}
          />
          {touched.firstName && errors.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...getFieldProps('lastName')}
          />
          {touched.lastName && errors.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...getFieldProps('email')} />
          {touched.email && errors.email ? (
            <div>{errors.email}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default IntroductionFormikComponents
