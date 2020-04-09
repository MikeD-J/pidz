import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona1.jpg';
import planner from './planner.jpg';

export default function ProfilePopup() {
	return(<>
	<div onClick={hideprofiel} id="bluefilter" class="bluefilter">

	</div>
	<div id="clickblocker" class="clickblocker">

	</div>
		</>)
}

 function hideprofiel() {
 	console.log("koek");
 	document.getElementsByTagName("BODY")[0].style.overflowY = 'scroll'; 
 	 document.getElementById('profiel1').style.zIndex = '-10';
 	   document.getElementById('bluefilter').style.zIndex = '-20';
    document.getElementById('profiel1').style.opacity = '0';
   document.getElementById('bluefilter').style.opacity = '0';
   


  }