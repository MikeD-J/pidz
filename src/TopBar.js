import React from 'react'
import pidzlogo from './pidz.png';
import persona from './persona1.jpg';
import planner from './planner.jpg';

export default function ProfilePopup() {
	return(<>
	<div class="topbar">
		<img class="pidzlogo" src={pidzlogo}/>
		<div class="hbmenu"><i class="fa fa-bars" aria-hidden="true"></i></div>
		<i class="fa fa-question-circle" aria-hidden="true"></i>
		<img class="toppersona" src={planner}/>
				<p>Linda Schiffer</p>
	</div>
		</>)
}