import React, { useState } from 'react';
import ProfilePopup from './ProfilePopup'
import TopBar from './TopBar'
import ZoekNBoek from './ZoekNBoek'
import ExtraInfo from './ExtraInfo'
import './App.css'

function App() {
  return (
    <>
    <ProfilePopup/>
    <TopBar/>
    <ZoekNBoek/>
    <ExtraInfo/>
    </>
    );
}

export default App;
