import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona1.jpg';
import Person from './Person'
import Person2 from './Person2'
import Person3 from './Person3'
import Person4 from './Person4'
import Person5 from './Person5'
import Person6 from './Person6'

export default function ProfilePopup() {
	return(<>
	<div id="personlist" class="personlist">
		<div class="flexbox topflex">
			<div class="vief">
				<input class="cbp" type="checkbox" id="allp" name="vehicle2" value="Bike"/>
			</div>
			<div class="derig">
				<p>ZZP-er</p>
			</div>
			<div class="vieftie">
				<p>Functie</p>
			</div>
			<div class="tiede">
				<p>Uurtarief</p>
			</div>
			<div class="tiede">
				<p>Afdeling</p>
			</div>
			<div class="tiede">
				<p>Organisatie</p>
			</div>
			<div class="tiede">
				<p>Uren</p>
			</div>
			<div class="tiede">
				<p>Score</p>
			</div>
		</div>
		<Person/>
		<Person2/>
		<Person3/>
		<Person4/>
		<Person5/>
		<Person6/>

		<div class="searchdiv">
				<button  class="search">ZZP'ers uitnodigen</button>
			</div>
	</div>
		</>)
}