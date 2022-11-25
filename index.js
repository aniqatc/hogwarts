// EXPAND ALL HOUSE CARD DETAILS
let expandAll = document.querySelector(".expand-houses");
expandAll.addEventListener("click", function () {
	houseContent.forEach(function (house) {
		if (house.style.display === "flex") {
			house.style.display = "none";
		} else {
			house.style.display = "flex";
		}
	});
});

// TOGGLE BETWEEN DIFFERENT CONTENT DIVS
let gryffBtn = document.querySelector("#gryffindor-btn");
let slythBtn = document.querySelector("#slytherin-btn");
let huffleBtn = document.querySelector("#hufflepuff-btn");
let ravenBtn = document.querySelector("#ravenclaw-btn");
let houseBtns = [gryffBtn, slythBtn, huffleBtn, ravenBtn];

let gryffContent = document.querySelector("#gryffindor");
let slythContent = document.querySelector("#slytherin");
let huffleContent = document.querySelector("#hufflepuff");
let ravenContent = document.querySelector("#ravenclaw");
let houseContent = [gryffContent, slythContent, huffleContent, ravenContent];

// Gryffindor Card
houseBtns[0].addEventListener("click", function () {
	if (houseContent[0].style.display === "none") {
		houseContent[0].style.display = "flex";
		houseContent[1].style.display = "none";
		houseContent[2].style.display = "none";
		houseContent[3].style.display = "none";
	} else {
		houseContent[0].style.display = "none";
	}
});

// Slytherin Card
houseBtns[1].addEventListener("click", function () {
	if (houseContent[1].style.display === "none") {
		houseContent[1].style.display = "flex";
		houseContent[0].style.display = "none";
		houseContent[2].style.display = "none";
		houseContent[3].style.display = "none";
	} else {
		houseContent[1].style.display = "none";
	}
});

// Ravenclaw Card
houseBtns[3].addEventListener("click", function () {
	if (houseContent[3].style.display === "none") {
		houseContent[3].style.display = "flex";
		houseContent[0].style.display = "none";
		houseContent[1].style.display = "none";
		houseContent[2].style.display = "none";
	} else {
		houseContent[3].style.display = "none";
	}
});

// Hufflepuff Card
houseBtns[2].addEventListener("click", function () {
	if (houseContent[2].style.display === "none") {
		houseContent[2].style.display = "flex";
		houseContent[0].style.display = "none";
		houseContent[1].style.display = "none";
		houseContent[3].style.display = "none";
	} else {
		houseContent[2].style.display = "none";
	}
});

// Form Apply Functionality
let apply = () => {
	let name = document.querySelector("#name").value;
	let age = document.querySelector("#age").value;
	let house = document.querySelector("#house").value;
	let trait = document.querySelector("#trait").value;
	let response = document.querySelector(".submission-response");

	house = house.toLowerCase().trim();
	trait = trait.toLowerCase().trim();

	if (
		(age >= 11 && house === "ravenclaw" && trait === "clever") ||
		trait === "creative" ||
		trait === "witty" ||
		trait === "curious" ||
		trait === "observant"
	) {
		response.textContent = `🦅 You're a match for Ravenclaw! Congrats, ${name}! We'll be in touch with you soon.`;

		// Slytherin
	} else if (
		(age >= 11 && house === "slytherin" && trait === "ambitious") ||
		trait === "cunning" ||
		trait === "pride" ||
		trait === "leadership" ||
		trait === "competitive"
	) {
		response.textContent = `🐍 ${name}, you'd be a great addition to Slytherin! We'll be in touch with you soon.`;

		// Gryffindor
	} else if (
		(age >= 11 && house === "gryffindor" && trait === "brave") ||
		trait === "determination" ||
		trait === "adventurous" ||
		trait === "idealistic" ||
		trait === "daring"
	) {
		response.textContent = `🦁 ${name}, you'd be a great addition to Gryffindor! We'll be in touch with you soon.`;

		// Hufflepuff
	} else if (
		(age >= 11 && house === "hufflepuff" && trait === "dedicated") ||
		trait === "hardworking" ||
		trait === "loyal" ||
		trait === "patient" ||
		trait === "modest"
	) {
		response.textContent = `🦡 ${name}, you'd be a great addition to Hufflepuff! We'll be in touch with you soon.`;
	}

	// Underage
	if (
		(age <= 10 && house === "hufflepuff") ||
		house === "gryffindor" ||
		house === "ravenclaw" ||
		house === "slytherin"
	) {
		response.textContent = `🚨 Sorry, you are not qualified. Please try again when you reach your 11th birthday!`;
	} else {
		response.textContent = `🚨 Sorry, you have not provided enough information.`;
	}
};

let applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", apply);

// Form Status Functionality
let statusCheck = () => {
	let name = document.querySelector("#name").value;
	let age = document.querySelector("#age").value;
	let applied = document.querySelector("#applied").value;
	let response = document.querySelector(".submission-response");

	applied = applied.toLowerCase().trim();

	if (age >= 11 && applied === "yes") {
		response.textContent = `Thank you for sending your application, ${name}! You are qualified to attend. An owl will be arriving soon with your decision and instructions. 🦉`;
	} else if ((age <= 11 && applied === "no") || applied === "yes") {
		response.textContent = `Unfortunately, you're not old enough, ${name}. Please check back in once you've turned 11. 🎂`;
	} else if (age >= 11 && applied === "no") {
		response.textContent = `You are qualified to apply, ${name}!`;
	} else {
		response.textContent = `🚨 Sorry, you have not provided enough information.`;
	}
};
let statusBtn = document.getElementById("status-check-btn");
statusBtn.addEventListener("click", statusCheck);

// Add Hover to Mobile
let courseListing = document.querySelector(".course-listing-container");
let navButtons = document.querySelector(".hero-nav");
courseListing.addEventListener("touchstart", function () {}, true);
navButtons.addEventListener("touchstart", function () {}, true);
