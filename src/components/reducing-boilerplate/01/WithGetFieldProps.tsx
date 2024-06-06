import { useFormik } from 'formik';
import { firstValidationSchema } from '../../../utils/validation';
import { useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

// method getFieldProps is a function that returns an object
// with the props that should be spread on the input element.

// resumen -->  getFieldProps devuelve un objeto con las props 
// para esparcirlas en el elemento input

const WithGetFieldProps = () => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [error, setError] = useState<string>('');

  const { getFieldProps, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: firstValidationSchema,
    onSubmit: async (values) => {
      // Simular logIn por ejemplo ...
      try {
        // const response = await fetch('https://example.com/login', {
        //   method: 'POST',
        //   body: JSON.stringify(values),
        // })
        setUser(values)
        // throw new Error('User not found')
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      {user.firstName && (
        <div>
          <strong>First Name:</strong> {user.firstName}
        </div>
      )}
      {error && <div>{error}</div>}
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...getFieldProps('firstName')}
      />
      {touched.firstName && errors.firstName && (
        <div>{errors.firstName}</div>
      )}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" {...getFieldProps('lastName')} />
      {touched.lastName && errors.lastName && (
        <div>{errors.lastName}</div>
      )}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" {...getFieldProps('email')} />
      {touched.email && errors.email && (
        <div>{errors.email}</div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default WithGetFieldProps
