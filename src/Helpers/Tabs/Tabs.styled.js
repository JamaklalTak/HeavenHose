import Styled from 'styled-components';

import { dim } from 'Styles/theme';

const TabStyleContainer = Styled.div`
ul {
  display: flex;
  flex-direction: ${props => props.tabView === 'H' ? 'row' : 'column'};
  margin: 0px;
  padding: 0px;
  li {
    display: ${props => props.tabView === 'H' ? 'inline' : 'block'}
    padding: ${dim._4px} ${dim._8px};
    cursor: pointer;
    color: ${props => props.theme.color.base_20};
    margin: ${props => props.tabView === 'H' ? `0px ${dim._4px}` : ''};
    margin-bottom: ${props => props.tabView === 'H' ? '' : dim._8px};
    border-bottom: 2px solid ${props => props.theme.color.base_100}
    :hover {
      color: ${props => props.theme.color.base_10};
    }
  }
}

.active {
  color: ${props => props.theme.color.base_10};
  border-bottom: 2px solid ${props => props.theme.color.base_10} !important;
}
`;

export default TabStyleContainer;