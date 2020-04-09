import React, { useState } from 'react';
import ProfilePopup from './ProfilePopup'
import TopBar from './TopBar'
import ZoekNBoek from './ZoekNBoek'
import ExtraInfo from './ExtraInfo'
import PersonList from './PersonList'
import BlueFilter from './BlueFilter'
import './App.css'



function App() {
  return (
    <>
    <ProfilePopup/>
    <BlueFilter/>
    <TopBar/>
    <ZoekNBoek/>
    <ExtraInfo/>
    <PersonList/>
    </>
    );
}

export default App;
