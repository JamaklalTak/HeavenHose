import React, { useState } from 'react';

import StyledButton from './Button.styled';

const Button = (props) => {
  const { value, _onClick } = props;

  const [buttonState, setButtonState] = useState('default');
  return(
    <StyledButton
    {...props}
    onMouseEnter={() => props.onMouseEnter ? props.onMouseEnter() : setButtonState('enter')}
    onMouseLeave={() => props.onMouseLeave ? props.onMouseLeave() : setButtonState('default')}
    className={props.className ? `${props.className} button14` : 'button14'}
    state={buttonState}
    hidden={props.hidden}
    onClick={() => _onClick()}
  >
    {value}
  </StyledButton>
  );
}

export default Button;