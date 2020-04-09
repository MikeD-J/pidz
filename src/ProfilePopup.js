import React from 'react'
import logo from './persona1.jpg';

export default function ProfilePopup() {
	return(<>
		<head>

	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>


	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="pidz.css"/> 
	<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700&display=swap" rel="stylesheet"/>
</head>

			<div id="profiel1" class="profile">
			<i onClick={hideprofiel} class="fa fa-times" aria-hidden="true"></i>
		<img class="persona" src={logo}/>
		<p class="name">Veronica van Maasen</p>
		<div class="flexbox">
			<div class="flexobject">
				<p>NAW</p>	
				<p>Woonplaats: Bergen op Zoom</p>
				<p>Telefoonnummer:+31 6 27386785</p>
				<p>Email: VeronicaVM@hotmail.com</p>
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
				<p>Geneeskunde aan Universiteit van Tilburg</p>
				<p>Gehandicaptenzorg aan Universiteit van Tilburg</p>	
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
  	document.getElementsByTagName("BODY")[0].style.overflowY = 'scroll'; 
 	 document.getElementById('profiel1').style.zIndex = '-10';
 	   document.getElementById('bluefilter').style.zIndex = '-20';
    document.getElementById('profiel1').style.opacity = '0';
   document.getElementById('bluefilter').style.opacity = '0';
   


  }