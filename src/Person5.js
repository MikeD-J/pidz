import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona5.jpg';




export default function ProfilePopup() {
	return(<>
	<div id="pers5" onClick={showprofiel} class="flexbox subflex">
			<div class="vief">
				<input class="cbp" type="checkbox" id="allp" name="vehicle2" value="Bike"/>
			</div>
			<div class="derig">
			<img class="plpersona" src={persona}/>
				<p class="plnaam">Li Jing Lee</p><p class="taggas">Afdeling Organisatie</p>
			</div>
			<div class="vieftie">
				<p>Begeleider 2</p>
			</div>
			<div class="tiede">
				<p>€ 20,00 BTW Vrij</p>
			</div>
			<div class="tiede">
				<i class="fa fa-check" aria-hidden="true"></i>
			</div>
			<div class="tiede">
				<i class="fa fa-check" aria-hidden="true"></i>
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
document.getElementById('amigo5').style.display = "block";
 	document.getElementsByTagName("BODY")[0].style.overflow = 'hidden'; 
 	document.getElementById('profiel1').style.zIndex = '20';
 	document.getElementById('bluefilter').style.zIndex = '15';
    document.getElementById('profiel1').style.opacity = '1';
    document.getElementById('bluefilter').style.opacity = '0.8';
   


  }