import React, { useState } from 'react';

import StyledButton from './Button.styled';

const Button = (props) => {
  const { value, _onClick, disabled } = props;

  const [buttonState, setButtonState] = useState('default');
  return(
    <StyledButton
    {...props}
    onMouseEnter={() => props.onMouseEnter ? props.onMouseEnter() : setButtonState('enter')}
    onMouseLeave={() => props.onMouseLeave ? props.onMouseLeave() : setButtonState('default')}
    className={`textBold14 ${props.className ? props.className : ''}`}
    state={buttonState}
    hidden={props.hidden}
    onClick={() => _onClick()}
    disabled={disabled}
  >
    {value}
  </StyledButton>
  );
}

export default Button;