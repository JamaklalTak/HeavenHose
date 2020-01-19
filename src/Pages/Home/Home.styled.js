import Styled from 'styled-components';

import { dim } from 'Styles/theme';

const HomeStyleContainer = Styled.div`
display: flex;
flex-direction: row;

.imageContainer {
  display: flex;
  flex-direction: column;
  flex: 33.33%;
  height: 100%;
}

.imageRow {
  padding: ${dim._4px};
}

.randomImage {
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.color.base_30};
}

`;

export default HomeStyleContainer;