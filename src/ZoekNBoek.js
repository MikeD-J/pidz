import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona1.jpg';

export default function ProfilePopup() {
	return(<>
		<div class="ZoekNBoek">
			<h1>Zoek & Boek</h1>
			<div class="inputs">
				<div class="smallinput">
					<p>type</p>
					<select id="periode">
					  <option value="volvo">Incidentele</option>
					  <option value="saab">Periode</option>
					</select>
				</div>
				<div class="biginput">
					<p>Datum</p>
					<input type="date" id="date" name="date"/>
				</div>
				<div class="smallinput">
					<p>afdeling</p>
					<select id="afdeling">
					  <option value="volvo">Selecteer een optie</option>
					  <option value="saab">Departement Periodical Shifts 101</option>
					</select>
				</div>
				<div class="smallinput">
					<p>functies</p>
					<select id="periode">
					  <option value="volvo">Begeleider 1</option>
					  <option value="saab">Begeleider 2</option>
					</select>
				</div>
				<div class="smallinput">
				<p> &nbsp;</p>
					<button type="button" onClick="alert('Hello world!')">Details<span class="arrow"></span></button>
				</div>


			</div>
			<div class="searchdiv">
				<button class="search"><span class="fa fa-search"></span>Zoek beschikbare ZZP'ers</button>
			</div>

		</div>
		</>)
}