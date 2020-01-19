import React from 'react';

import TabStyleContainer from './Tabs.styled';

const Tabs = (props) => {
  const { tabData, _onTabClick, activeTabId, tabView } = props;
  return(
    <TabStyleContainer tabView={tabView.toUpperCase()}>
      <ul>
        {tabData && tabData.length > 0 && tabData.map(tab => {
          return(
            <li
              key={tab.id}
              className={activeTabId === tab.id ? 'active' : ''}
              onClick={() =>_onTabClick(tab.id)}
            >
              {tab.name}
            </li>
          )
        })}
      </ul>
    </TabStyleContainer>
  );
}

export default Tabs;