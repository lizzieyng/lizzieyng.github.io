

console.log("testing that this works")

//Invert
var invertButton = document.querySelector("button")
var bodyClass = document.body.classList

invertButton.addEventListener("click", changeColor)

function changeColor() {
	console.log("testing the color change")

	if ( bodyClass.contains ("invert") ) {
		bodyClass.remove("invert")

	}

	else { 
		bodyClass.add("invert")

	}
}

//Greeting 

var hand = document.querySelector(".waving-hand")
var greeting = document.querySelector(".greeting")

hand.addEventListener("click", sayHello) 

function sayHello() {
	greeting.textContent = "well hey there."
}

//Fern 

var toggle = document.querySelector(".toggle")
var content = document.querySelector(".content")

toggle.addEventListener("click", showHide)

function showHide() {
	content.id == "show" ? content.id = " " : content.id = "show"
}