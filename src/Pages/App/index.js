import React from 'react';

import Header from 'Components/Header';

import Routes from '../../Routes';

import AppStyleContainer from './App.styled';

function App(props) {
  return (
    <AppStyleContainer>
      <Header {...props} />
      <div className='AppContainer'>
        <Routes />
      </div>
    </AppStyleContainer>
  );
}

export default App;
