import React from 'react';

import InputStyle from './Input.styled';

const Input = (props) => {
  const { _onClick, _onChange, _onFocus, _onBlur, value, className } = props;

  return(
    <InputStyle>
      <input
        className={`text14 ${className}`}
        type='text'
        value={value}
        placeholder='Enter text here!'
        onClick={_onClick}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </InputStyle>
  );
}

export default Input;