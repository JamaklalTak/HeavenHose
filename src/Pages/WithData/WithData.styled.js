import Styled from 'styled-components';

import { dim } from 'Styles/theme';

const WithDataStyleContainer = Styled.div`
display: flex;
flex-direction: row;

.imageContainer {
  display: flex;
  flex-direction: column;
  flex: 33.33%;
  height: 100%;
  figure {
    margin: ${dim._4px};
    position: relative;
    figcaption {
      padding: ${dim._8px};
      position: absolute;
      bottom: 0;
      background-color: transparent;
      color: ${props => props.theme.color.base_100};
    }
  }
}

.imageName{
  display: flex;
  position: absolute;
  top: ${dim._18px};
  left: ${dim._8px};
  width: 60%;
  text-transform: capitalize;
}

.userName {
  display: flex;
  flex-direction: row;
  align-items: center;
  top: ${dim._8px};
  right: ${dim._8px};
  position: absolute;
  span {
    margin-left: ${dim._4px};
  }
}
`;

export default WithDataStyleContainer;