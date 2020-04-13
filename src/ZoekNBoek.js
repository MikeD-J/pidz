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
					<select id="functie">
					  <option value="volvo">Begeleider 1</option>
					  <option value="saab">Begeleider 2</option>
					</select>
				</div>
				<div class="smallinput">
				<p> &nbsp;</p>
					<button type="button">Details<span class="arrow"></span></button>
				</div>


			</div>
			<div class="ot1">
				<div class="ot2">
					<div class="ot3">
					<i class="fa fa-plus" aria-hidden="true"></i>
						<p>Opdracht toevoegen</p>
					</div>
				</div>
			</div>
			<p id="searchalert">Vul eerst alle velden in.</p>
			<div class="searchdiv">
				<button onClick={showsearches} class="search"><span class="fa fa-search"></span>Zoek beschikbare ZZP'ers</button>
			</div>

		</div>
		</>)
}

 function showsearches() {

var e = document.getElementById("periode");
var text = e.options[e.selectedIndex].text;

var date = document.getElementById("date").value;

var a = document.getElementById("afdeling");
var afdeling = a.options[a.selectedIndex].text;

var b = document.getElementById("functie");
var functie = b.options[b.selectedIndex].text;

if (date != "" && afdeling != "Selecteer een optie") {

   document.getElementById('personlist').style.opacity = '1';
   document.getElementById('extrainfo').style.opacity = '1';
   document.getElementById('clickblocker').style.display = 'none';
    document.getElementById('searchalert').style.display = 'none';

    document.getElementById("perioderesult").innerHTML = text;
    document.getElementById("afdelingresult").innerHTML = afdeling;
    document.getElementById("dateresult").innerHTML = date;

    if (functie == "Begeleider 1") {
    	document.getElementById("begeleider1").checked = true;
    	document.getElementById("begeleider2").checked = false;
    	document.getElementById("pers5").style.display = "none";
    	document.getElementById("pers6").style.display = "none";
    }
    else {
    	document.getElementById("begeleider1").checked = false;
    	document.getElementById("begeleider2").checked = true;
    	document.getElementById("pers1").style.display = "none";
    	document.getElementById("pers2").style.display = "none";
    	document.getElementById("pers3").style.display = "none";
    	document.getElementById("pers4").style.display = "none";
    	
    }

} 

else {
	 document.getElementById('searchalert').style.display = 'block';

}



}
