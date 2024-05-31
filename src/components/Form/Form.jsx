import React, { useState } from 'react';

function Form(props) {
  // eslint-disable-next-line react/prop-types
  const { children, onSubmit } = props;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { formData, handleInputChange })
      )}
    </form>
  );
}

export default Form;
