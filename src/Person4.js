import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona4.jpg';




export default function ProfilePopup() {
	return(<>
	<div id="pers4" onClick={showprofiel} class="flexbox subflex">
			<div class="vief">
				<input class="cbp" type="checkbox" id="allp" name="vehicle2" value="Bike"/>
			</div>
			<div class="derig">
			<img class="plpersona" src={persona}/>
				<p class="plnaam">Sander van Dongen</p><p class="taggas"></p>
			</div>
			<div class="vieftie">
				<p>Begeleider 1</p>
			</div>
			<div class="tiede">
				<p>€ 20,00 BTW Vrij</p>
			</div>
			<div class="tiede">
				<i class="fa fa-times" aria-hidden="true"></i>
			</div>
			<div class="tiede">
				<i class="fa fa-times" aria-hidden="true"></i>
			</div>
			<div class="tiede minur">
			<p class="invifix"></p>
				<span>Min 4 uur</span>
			</div>
			<div class="tiede">
				<div class="scorebad">
					<i class="fa fa-question" aria-hidden="true"></i>
				</div>
			</div>

		</div>

		</>)
}

 function showprofiel() {
 	document.getElementById('amigo4').style.display = "block";

 	document.getElementsByTagName("BODY")[0].style.overflow = 'hidden'; 
 	document.getElementById('profiel1').style.zIndex = '20';
 	document.getElementById('bluefilter').style.zIndex = '15';
    document.getElementById('profiel1').style.opacity = '1';
    document.getElementById('bluefilter').style.opacity = '0.8';
   


  }