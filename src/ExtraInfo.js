import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona1.jpg';
import $ from 'jquery'; 


export default function ProfilePopup() {
	return(<>
	<div id="extrainfo" class="extrainfo">
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
				<input type="text" id="filtername" name="fname" placeholder="Zoeken"/>
			</div>
			<div class="twenfi">
				<p>Eerder gewerkt bij/op:</p>
				<select id="afdeling" placeholder="Selecteer een optie">
				  <option value="volvo">Selecteer een optie</option>
				  <option value="saab">Afdeling</option>
				  <option value="saab">Organisatie</option>
				</select>
			</div>
			<div class="sisti">
				<p>Functies</p>
				<input class="cbp" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  				<label for="koek">Begeleider1</label>
  				<br/>
  				<input class="cbp" type="checkbox" id="vehicle2" name="vehicle2" value="Bike"/>
  				<label for="koek">Begeleider2</label>
			</div>
			<div class="sisti">
				<p>Max tarief</p>
				<input class="tarif" type="text" id="mt" name="fname" placeholder=""/>
				<input class="tarif" type="text" id="mt2" name="fname" placeholder=""/>
			</div>
			<div class="sisti">
				<button class="filterbtn" type="button">Filter alles</button>
			</div>
		</div>
	</div>
		</>)
}

$(document).ready(function(){
    $("#filtername").keyup(function(){
 
       
        var filter = $(this).val(), count = 0;
 
        $(".subflex ").each(function(){
 
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
             
            } else {
                $(this).show();
                count++;

            }
        });
        var numberItems = count;
        
    });
});