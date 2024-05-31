/* eslint-disable no-unused-vars */
import React from 'react';

function FormInput(props) {
  // eslint-disable-next-line react/prop-types
  const { label, type = 'text',...rest } = props;

  return (
    <div>
      <label>{label}</label>
      <input type={type} {...rest} />
    </div>
  );
}

export default FormInput;
