import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona1.jpg';
import Person from './Person'

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
				<p>Minumum uren</p>
			</div>
			<div class="tiede">
				<p>Score</p>
			</div>
		</div>
		<Person/>
		<Person/>
		<Person/>
		<Person/>
		<Person/>
	</div>
		</>)
}