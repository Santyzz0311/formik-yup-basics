import { useField } from 'formik'
import { ReactNode } from 'react';

// Using the useField hook to create a custom input component
// This is a more declarative way to create form fields and do abstraction

interface MyTextInputProps {
  label: string;
  name: string;
  type?: string;
  id?: string;
  placeholder?: string;
  [key: string]: any;
}

export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

interface MyCheckboxProps {
  name: string;
  children: ReactNode;
  id?: string;
  [key: string]: any; // para permitir otros atributos opcionales
}

export const MyCheckbox = ({ children, ...props }: MyCheckboxProps) => {
  // React treats radios and checkbox inputs differently from other input types: select and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

interface MySelectProps {
  label: string;
  name: string;
  id?: string;
  [key: string]: any;
}

export const MySelect = ({ label, ...props }: MySelectProps) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
