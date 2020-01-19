import Styled from 'styled-components';

import { dim } from 'Styles/theme';

const InputStyle = Styled.div`
display: flex;
input {
    border: 1px solid ${props => props.theme.color.base_10}
    border-radius: 4px;
    padding: ${dim._12px};
    width: 100%;
    margin: ${dim._8px} 0px;
}
`;

export default InputStyle;