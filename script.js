"use strict"

function changeCircle() {
		var input = document.getElementById('radius');
		var radius = input.value;
		
	function getRadius () {
		var el = document.createElement("p")
// 		el.innerHTML = "The new radius of this circle is " + radius + "px.";
		document.body.appendChild(el);
		console.log(radius);
	}


	function calculateArea(radius) {
    	var area = 3.14 * (radius * radius);
    	var el = document.createElement("p");
    	var circle = document.getElementById("circle")
    	el.innerHTML = 'The area of this circle is equal to ' + area + 'px.';
    	circle.appendChild(el);
    	console.log(radius);
    	
	}

	function resizeCircle(radius) {
		var circle = document.getElementById("circle");
		circle.style.width = (2 * radius) + "px" ;
		circle.style.height =(2 * radius) + "px" ;
	}	
	
getRadius();
calculateArea(radius);
resizeCircle(radius);
// 1. get the circle element (by class "circle")
// 2. change the width CSS property. (2 * radius)
}


