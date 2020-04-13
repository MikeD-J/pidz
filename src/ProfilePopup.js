import React from 'react'
import logo from './persona1.jpg';
import Header from './Header'
import Pers1 from './Pers1'
import Pers2 from './Pers2'
import Pers3 from './Pers3'
import Pers4 from './Pers4'
import Pers5 from './Pers5'
import Pers6 from './Pers6'



export default function ProfilePopup() {
	return(<>
		<Header/>
		<div id="profiel1" class="profile">
		<Pers1/>	
		<Pers2/>	
		<Pers3/>	
		<Pers4/>	
		<Pers5/>	
		<Pers6/>	
		</div>
		</>)
}
