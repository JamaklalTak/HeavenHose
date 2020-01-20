import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Input from 'Helpers/Input';
import Tabs from 'Helpers/Tabs';

import { getData } from './store/action';

import HeaderStyleContainer from './Header.styled';

const Header = (props) => {
  const tabData = [
    {
      id: 'editorial',
      name: 'Editorial'
    },
    {
      id: 'animal',
      name: 'Animal'
    }
  ];

  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('editorial');

  useEffect(() => {
    props.dispatch(getData());
  }, [activeTab]);

  useEffect(() => {
    const path = window.localStorage.getItem('currentPath');
    if(path === '/animal'){
      setActiveTab('animal');
    }
    if(path === '/editorial' || path === '/' || path === '/home'){
      setActiveTab('editorial');
    }
  });

  const _handleSearch = (value) => {
    setSearchValue(value);
  };

  const _handleTabClick = (id) => {
    setActiveTab(id);
    let path = '/';
    if(id === 'animal'){
      path = '/animal'
    }
    window.localStorage.setItem('currentPath', path);
    props.history.push(`/HeavenHose${path}`);
  };

  return(
    <HeaderStyleContainer>
      <div className='appTopHeader'>
        <div className='title'>
          <svg class="_2m4hn" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-labelledby="unsplash-home" aria-hidden="false">
            <title id="unsplash-home">Haven Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
          <span className='titleName headerBold24'>HAVEN HOUSE</span>
        </div>
        <Input className='searchTopic' value={searchValue} _onChange={e => _handleSearch(e.target.value)} />
      </div>
      <div className='appSubHeader'>
        <Tabs tabData={tabData} activeTabId={activeTab} _onTabClick={_handleTabClick} tabView='H' />
      </div>
    </HeaderStyleContainer>
  );
}

const mapDispatchToProps = dispatch => dispatch;

export default connect(mapDispatchToProps)(Header);