import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona3.jpg';
import planner from './planner.jpg';
import logo from './persona3.jpg';

export default function ProfilePopup() {
	return(<>
	<div id="amigo3">
	<i onClick={hideprofiel} class="fa fa-times" aria-hidden="true"></i>
		<img class="persona" src={logo}/>
		<p class="name">Saskia Roomvoorts</p>
		<div class="flexbox">
			<div class="flexobject">
				<p>NAW</p>	
				<p>Woonplaats: Amersfoort</p>
				<p>Telefoonnummer:+31 6 64859364</p>
				<p>Email: saskiarmvrts@hotmail.com</p>
				<p>Leeftijd: 31</p>
			</div>
			<div class="flexobject">
				<p>Bestanden</p>
				<p><a href="https://demo-eindhoven.mijnpidz.nl/cv/worker/89/download">Download CV</a></p>
				<p><a href="https://demo-eindhoven.mijnpidz.nl/asset/1/download">Download VOG</a></p>	
				<p><a href="https://demo-eindhoven.mijnpidz.nl/asset/12/download">Download Diploma</a></p>	
			</div>
			<div class="flexobject">
				<p>Opleidingen</p>
				<p>Geneeskunde aan Universiteit van Amsterdam.</p>
				<p>Gehandicaptenzorg aan Universiteit van Amsterdam.</p>	
			</div>
			<div class="flexobject">
				<p>Opmerkingen</p>	
				<p>Ik ben begaafd psychologie.</p>
				<p>Ik ben vaardig met een stethoscoop.</p>
			</div>
		</div>
		<div class="flexbox">
			<div class="flexobject2">
				<i class="fa fa-car" aria-hidden="true"></i>
				<p>28 min. (14km)</p>
			</div>	
			<div class="flexobject2">
				<i class="fa fa-subway" aria-hidden="true"></i>
				<p>37 min. (17km)</p>
			</div>	
			<div class="flexobject2">
				<i class="fa fa-bicycle" aria-hidden="true"></i>
				<p>59 min. (12km)</p>
			</div>	
			<div class="flexobject2">
				<i class="fa fa-male" aria-hidden="true"></i>
				<p>157 min. (12km)</p>
			</div>	
		</div>
		<div class="uitnodigen">
			<p class="uitnodigentitel">Uitnodigen voor openstaande diensten</p>
				<div class="tablecont">
				<table>
				  <tr>
				    <th>Type</th>
				    <th>Begin</th>
				    <th>Eind</th>
				    <th>Afdeling</th>
				    <th>Uitnodigen</th>
				  </tr>
				  <tr>
				    <td>Incidenteel</td>
				    <td>17-03-2020 12:00</td>
				    <td>17-03-2020 17:00</td>
				    <td>Ouderenzorg</td>
				    <td><input type="checkbox" id="dienst1" name="dienst1" value="nee"/></td>
				  </tr>
				  <tr>
				    <td>Incidenteel</td>
				    <td>21-03-2020 9:00</td>
				    <td>21-03-2020 13:00</td>
				    <td>Ouderenzorg</td>
				    <td><input type="checkbox" id="dienst1" name="dienst1" value="nee"/></td>
				  </tr>
				  <tr>
				    <td>Incidenteel</td>
				    <td>22-03-2020 15:00</td>
				    <td>22-03-2020 23:00</td>
				    <td>Ouderenzorg</td>
				    <td><input type="checkbox" id="dienst1" name="dienst1" value="nee"/></td>
				  </tr>
				  <tr>
				    <td>Incidenteel</td> 
				    <td>28-03-2020 8:00</td>
				    <td>28-03-2020 18:00</td>
				    <td>Jeugdzorg</td>
				    <td><input type="checkbox" id="dienst1" name="dienst1" value="nee"/></td>
				  </tr>
				  <tr>
				    <td>Periodiek</td>
				    <td>1-04-2020 12:00</td>
				    <td>30-04-2020 17:00</td>
				    <td>Ouderenzorg</td>
				    <td><input type="checkbox" id="dienst1" name="dienst1" value="nee"/></td>
				  </tr>
				   <tr>
				    <td>Periodiek</td>
				    <td>1-04-2020 12:00</td>
				    <td>30-04-2020 17:00</td>
				    <td>Ouderenzorg</td>
				    <td><input type="checkbox" id="dienst1" name="dienst1" value="nee"/></td>
				  </tr>
				   <tr>
				    <td>Periodiek</td>
				    <td>1-04-2020 12:00</td>
				    <td>30-04-2020 17:00</td>
				    <td>Ouderenzorg</td>
				    <td><input type="checkbox" id="dienst1" name="dienst1" value="nee"/></td>
				  </tr>
				   <tr>
				    <td>Periodiek</td>
				    <td>1-04-2020 12:00</td>
				    <td>30-04-2020 17:00</td>
				    <td>Ouderenzorg</td>
				    <td><input type="checkbox" id="dienst1" name="dienst1" value="nee"/></td>
				  </tr>
				</table>
				</div>
				<div class="uitnodigdiv">
				<button class="search">Uitnodigen</button>
			</div>
		</div>
		</div>

		</>)
}


 function hideprofiel() {

 	 	if (document.getElementById('amigo1').style.display === 'block') {
 		document.getElementById('amigo1').style.display = "none";
 	}
 	if (document.getElementById('amigo2').style.display === 'block') {
 		document.getElementById('amigo2').style.display = "none";
 	}
 	if (document.getElementById('amigo3').style.display === 'block') {
 		document.getElementById('amigo3').style.display = "none";
 	}
 	if (document.getElementById('amigo4').style.display === 'block') {
 		document.getElementById('amigo4').style.display = "none";
 	}
 	if (document.getElementById('amigo5').style.display === 'block') {
 		document.getElementById('amigo5').style.display = "none";
 	}
 	if (document.getElementById('amigo6').style.display === 'block') {
 		document.getElementById('amigo6').style.display = "none";
 	}


  	document.getElementsByTagName("BODY")[0].style.overflowY = 'scroll'; 
 	 document.getElementById('profiel1').style.zIndex = '-10';
 	   document.getElementById('bluefilter').style.zIndex = '-20';
    document.getElementById('profiel1').style.opacity = '0';
   document.getElementById('bluefilter').style.opacity = '0';
   


  }