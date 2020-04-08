import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona1.jpg';

export default function ProfilePopup() {
	return(<>
	<div class="extrainfo">
		<div class="flexbox">
			<div class="bigflex">
				<span>13/13</span>
				<p>Uit te nodigen</p>
			</div>
			<div class="bigflex bggrey">
				<span>0/0</span>
				<p>Direct te boeken</p>
			</div>
		</div>
		<div class="flexbox">
			<div class="wanfor">
				<p class="wanforupper">Opdracht</p>
				<p class="wanforlower">Incidentele opdracht</p>
			</div>
			<div class="wanfor">
				<p class="wanforupper">Afdeling</p>
				<p class="wanforlower">Department Periodical Shifts 101</p>
			</div>
			<div class="wanfor">
				<p class="wanforupper">Periode</p>
				<p class="wanforlower">08-04-2020 12:00 | 08-04-2020 13:00</p>
			</div>
			<div class="wanfor">
			</div>
		</div>
		<div class="flexbox">
			<div class="twenfi">
				<p>Zoeken</p>
				<input type="text" id="fname" name="fname" placeholder="Zoeken"/>
			</div>
			<div class="twenfi">
				<p>Eerder gewerkt bij/op:</p>
				<select id="afdeling" placeholder="Selecteer een optie">
				  <option value="volvo">Selecteer een optie</option>
				  <option value="saab">Afdeling</option>
				  <option value="saab">Organisatie</option>
				</select>
			</div>
			<div class="twenfi">
				<p>Zoeken</p>
			</div>
						<div class="twenfi">
				<p>Zoeken</p>
			</div>
		</div>
	</div>
		</>)
}