// HERO-APPLY BUTTON
function apply() {
	let heading = document.querySelector("h4");
	let secondHeading = document.querySelector("h3");
	let name = prompt("What is your name?");
	let age = prompt("How old are you?");
	let house = prompt("Which house would you like to join?");
	let trait = prompt("Tell us one trait that defines you best.");

	house = house.toLowerCase().trim();
	trait = trait.toLowerCase().trim();

	// Ravenclaw
	if (
		(age >= 11 && house === "ravenclaw") ||
		trait === "clever" ||
		trait === "creative" ||
		trait === "witty" ||
		trait === "curious" ||
		trait === "observant"
	) {
		alert(
			`${name}, you'd be a great addition to Ravenclaw! 🦅 We'll be in touch with you soon.`
		);
		heading.textContent = `You're a match for Ravenclaw! Congrats, ${name}! 🦅`;
		secondHeading.textContent = `You matched with Ravenclaw, ${name}! 🦅`;

		// Slytherin
	} else if (
		(age >= 11 && house === "slytherin") ||
		trait === "ambitious" ||
		trait === "cunning" ||
		trait === "pride" ||
		trait === "leadership" ||
		trait === "competitive"
	) {
		alert(
			`${name}, you'd be a great addition to Slytherin! 🐍 We'll be in touch with you soon.`
		);
		heading.textContent = `You're a match for Slytherin! Congrats, ${name}! 🐍`;
		secondHeading.textContent = `You matched with Slytherin, ${name}! 🐍`;

		// Gryffindor
	} else if (
		(age >= 11 && house === "gryffindor") ||
		trait === "brave" ||
		trait === "determination" ||
		trait === "adventurous" ||
		trait === "idealistic" ||
		trait === "daring"
	) {
		alert(
			`${name}, you'd be a great addition to Gryffindor! 🦁 We'll be in touch with you soon.`
		);
		heading.textContent = `You're a match for Gryffindor! Congrats, ${name}! 🦁`;
		secondHeading.textContent = `You matched with Gryffindor, ${name}! 🦁`;

		// Hufflepuff
	} else if (
		(age >= 11 && house === "hufflepuff") ||
		trait === "dedicated" ||
		trait === "hardworking" ||
		trait === "loyal" ||
		trait === "patient" ||
		trait === "modest"
	) {
		alert(
			`${name}, you'd be a great addition to Hufflepuff! 🦡 We'll be in touch with you soon.`
		);
		heading.textContent = `You're a match for Hufflepuff! Congrats, ${name}! 🦡`;
		secondHeading.textContent = `You matched with Hufflepuff, ${name}!  🦡`;
	}

	// Underage
	if (age < 10) {
		alert(
			`🚨 Sorry ${name}, looks like you're not old enough or you have not provided enough information.`
		);
		heading.textContent = ` `;
		secondHeading.textContent = `We'll be here when you're ready, ${name}! 🦉`;
	}
}

let heroBtn = document.querySelector(".hero-apply-btn");
heroBtn.addEventListener("click", apply);

// CHECK STATUS BUTTON
function statusCheck() {
	let heading = document.querySelector("h3");
	let name = prompt("What is your name?");
	let age = prompt("How old are you?");
	let applied = prompt("Have you applied already? Yes or no?");

	applied = applied.toLowerCase().trim();

	if (age >= 11 && applied === "yes") {
		alert(
			`Thank you for sending your application, ${name}! You are qualified to attend. An owl will be arriving soon with your decision and instructions. 🦉`
		);
		heading.textContent = `An owl is on its way, ${name}! 🦉`;
	} else if ((age < 11 && applied === "no") || applied === "yes") {
		alert(
			`Unfortunately, you're not old enough, ${name}. Please check back in once you've turned 11. 🎂`
		);
		heading.textContent = `We'll be here when you turn 11, ${name}! 🎂`;
	} else if (age >= 11 && applied === "no") {
		alert(
			`You are qualified to apply, ${name}! Please click the 'Apply Now' button to move forward! 🪄`
		);
	} else {
		alert(`🚨 Sorry, you have not provided enough information.`);
	}
}

let statusBtn = document.querySelector(".status-btn");
statusBtn.addEventListener("click", statusCheck);

// FOOTER-APPLY BUTTON
let footerBtn = document.querySelector(".footer-apply-btn");
footerBtn.addEventListener("click", apply);
