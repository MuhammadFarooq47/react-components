// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ btnText, style, onClick, type }) => {
  return (
    <button style={style} onClick={onClick} type={type}>
      {btnText}
    </button>
  );
};

export default Button;