import './main-screen.css'
import React from 'react';
import Header from "../../components/header/header";
import Main from '../../components/main/main';

function MainScreen(): JSX.Element {
  return (
    <div className='page'>
      <Header />
      <Main />
    </div>
  )
}

export default MainScreen;
