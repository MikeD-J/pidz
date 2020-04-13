import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona1.jpg';
import planner from './planner.jpg';
import logo from './persona1.jpg';

export default function ProfilePopup() {
	return(<>
	<div id="amigo1">
	<i onClick={hideprofiel} class="fa fa-times" aria-hidden="true"></i>
		<img class="persona" src={logo}/>
		<p class="name">Veronica van Maasen</p>
		<div class="flexbox">
			<div class="flexobject">
				<p>NAW</p>	
				<p>Woonplaats: Bergen op Zoom</p>
				<p>Telefoonnummer:+31 6 27386785</p>
				<p>Email: veronicavm@hotmail.com</p>
				<p>Leeftijd: 35</p>
			</div>
			<div class="flexobject">
				<p>Bestanden</p>
				<p><a href="https://demo-eindhoven.mijnpidz.nl/cv/worker/89/download">Download CV</a></p>
				<p><a href="https://demo-eindhoven.mijnpidz.nl/asset/1/download">Download VOG</a></p>	
				<p><a href="https://demo-eindhoven.mijnpidz.nl/asset/12/download">Download Diploma</a></p>	
			</div>
			<div class="flexobject">
				<p>Opleidingen</p>
				<p>Geneeskunde aan Universiteit van Tilburg.</p>
				<p>Gehandicaptenzorg aan Universiteit van Tilburg.</p>	
			</div>
			<div class="flexobject">
				<p>Opmerkingen</p>	
				<p>Ik ben begaafd in het omgaan met mensen die verstandelijk gehandicapt zijn.</p>
				<p>Ik ben vaardig met het omgaan met een insulinespuit.</p>
			</div>
		</div>
		<div class="flexbox">
			<div class="flexobject2">
				<i class="fa fa-car" aria-hidden="true"></i>
				<p>18 min. (11km)</p>
			</div>	
			<div class="flexobject2">
				<i class="fa fa-subway" aria-hidden="true"></i>
				<p>27 min. (15km)</p>
			</div>	
			<div class="flexobject2">
				<i class="fa fa-bicycle" aria-hidden="true"></i>
				<p>49 min. (9km)</p>
			</div>	
			<div class="flexobject2">
				<i class="fa fa-male" aria-hidden="true"></i>
				<p>147 min. (9km)</p>
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