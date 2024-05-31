// eslint-disable-next-line no-unused-vars
import React from 'react';
import Form from '../../components/Form/Form';
import FormInput from '../../components/Input/FormInput';
import FormButton from '../../components/Button/Button';

function SignupForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup form submission
    console.log('Signup form submitted');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <FormInput
        label="First Name"
        name="firstName"
      />
      <FormInput
        label="Last Name"
        name="lastName"
      />
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
      <FormButton btnText="Sign Up" />
    </Form>
  );
}

export default SignupForm;
