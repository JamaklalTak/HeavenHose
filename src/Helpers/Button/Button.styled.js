import styled from 'styled-components';
import { dim } from 'Styles/theme';

const getButtonColor = (props) => {
  if (props.primaryBtn) {
    if (props.disabled) return props.theme.color.base_100;
    return props.buttonColor || props.theme.color.blue_50;
  }
  if (props.disabled) return props.theme.color.white;
  if (props.state === 'enter') return props.buttonColor || props.theme.white;
  return props.buttonColor || props.theme.color.white;
};

const getColor = (props) => {
  if (props.primaryBtn) {
    if (props.disabled) return props.theme.color.base_30;
    return props.fontColor || props.theme.color.white;
  }
  if (props.disabled) return props.theme.color.text_low_emphasis;
  return props.fontColor || props.theme.color.blue_50;
};

const StyledButton = styled.button`
  display: flex;
  height: ${props => (props.height ? dim._scale(props.height) : 'auto')};
  width: ${props => (props.width || '100%')};
  align-items: center;
  justify-content: center;
  padding: ${dim._4px} ${dim._16px} ${dim._4px} ${dim._12px};
  color: ${props => getColor(props)};
  background-color: ${props => getButtonColor(props)};
  border: ${(props) => {
    return props.secondaryBtn ?
    `1px solid ${(props.fontColor || props.theme.color.blue_50, '.1')}`
    :
    `1px solid ${props => props.theme.color.base_30}`;
  }};
  border-radius: ${props => (props.borderRadius || '4px')};
  cursor: ${props => !props.disabled ? 'pointer' : 'default'};

  box-shadow: ${props => !props.disabled ? '0 1px 2px 0 rgba(9, 30, 66, 0.15), 0 0 1px 0 rgba(9, 30, 66, 0.25)' : ''};
  transition: 0.2s ease-out;

  :hover {
    box-shadow: ${props => !props.disabled && props.hoverBoxShadow || 0};
    background-color: ${props => !props.disabled && props.hoverColor || getButtonColor(props)};
  }

  :active {
    box-shadow: ${props => !props.disabled && props.activeBoxShadow || 0};
    background-color: ${props => !props.disabled && props.activeColor || getButtonColor(props)};
  }

  .loaderImage {
    width: 40px;
    height: 40px;
    z-index: 9;
  }

  .buttonImage {
    margin-right: ${dim._12px}
  }
`;

export default StyledButton;
