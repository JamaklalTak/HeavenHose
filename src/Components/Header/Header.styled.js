import Styled from 'styled-components';

import { dim } from 'Styles/theme';

const HeaderStyleContainer = Styled.div`
display: flex;
flex-direction: column;
padding: ${dim._12px} 5% 0px 5%;
box-shadow: 0 4px 12px rgba(0,0,0,.08), 0 0 1px rgba(1,0,0,.1);
margin-bottom: ${dim._12px};

.appTopHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.titleName {
  margin-left: ${dim._8px};
}

.searchTopic {
  width: ${dim._scale(320)};
}

.appSubHeader {
  display: flex;
  flex-direction: row;
  margin-top: ${dim._14px};
}

.verticalDivider {
  width: 1px;
  height: auto;
  background-color: ${props => props.theme.color.base_30};
}

.editorialText {
  margin: 0px ${dim._4px};
  padding: ${dim._4px} ${dim._8px};
  cursor: pointer;
  color: ${props => props.theme.color.base_20};
  border-bottom: 2px solid ${props => props.theme.color.base_100};
  :hover {
    color: ${props => props.theme.color.base_10};
  }
}

.activeTab {
  color: ${props => props.theme.color.base_10};
  border-bottom: 2px solid ${props => props.theme.color.base_10};
}
`;

export default HeaderStyleContainer;