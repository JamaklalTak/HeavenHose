import Modal from 'styled-react-modal';
import { dim } from 'Styles/theme';

const DialogStyleContainer = Modal.styled`
width: ${dim._scale(680)};
align-items: center;
justify-content: center;
background-color: white;
transition: opacity ease 500ms;
border-radius: 4px;
padding: ${dim._12px};

.dialogHeading {
  background-color: ${props => props.headerBackground || props.theme.color.blue_20};
  padding: ${props => props.headingPadding || dim._24px};
  color: ${props => props.headerColor || props.theme.color.white};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.dialogBody {
  padding: ${props => props.bodyPadding || dim._24px};
  color: ${props => props.theme.color.base_20};
}

.dialogDivider {
  height: 2px;
  background-color: ${props => props.theme.color.base_80};
}

.dialogButtonContainer {
  padding: ${dim._24px};
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
}

.dialogBodyHeading {
  font-weight: 600;
  font-size: ${dim._12px};
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #6C6D6F;
  margin-left: ${dim._24px};
}

.dialogBodyContainer {
  display: flex;
  flex-direction: column;
}

.dialogImageURL {
  display: flex;
  justify-content: center;
  img {
    width: ${dim._scale(420)};
    height: ${dim._scale(420)};
  }
}

.dialogUserName {
  display: flex;
  align-items: center;
  margin: ${dim._8px} 0px;
  span {
    margin-left: ${dim._8px};
  }
}

.dialogDetailContainer {
  margin: ${dim._12px} 0px;
}

.dialogImageName {
  text-transform: capitalize;
  margin-bottom: ${dim._8px};
  :hover{
    cursor: pointer;
  }
}

.dialogImageDesc {
  :hover{
    cursor: pointer;
  }
}

`;

export default DialogStyleContainer;
