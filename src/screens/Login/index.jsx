// eslint-disable-next-line no-unused-vars
import React from 'react';
import Form from '../../components/Form/Form';
import FormInput from '../../components/Input/FormInput';
import FormButton from '../../components/Button/Button';

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login form submission
    console.log('Login form submitted');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <FormInput
        label="Email"
        name="email"
        type="email"
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
      />
      <FormButton btnText="Login" />
    </Form>
  );
}

export default LoginForm;
