let gryffBtn = document.querySelector("#gryffindor-btn");
let slythBtn = document.querySelector("#slytherin-btn");
let huffleBtn = document.querySelector("#hufflepuff-btn");
let ravenBtn = document.querySelector("#ravenclaw-btn");

let gryffContent = document.querySelector("#gryffindor");
let slythContent = document.querySelector("#slytherin");
let huffleContent = document.querySelector("#hufflepuff");
let ravenContent = document.querySelector("#ravenclaw");

gryffBtn.addEventListener("click", function () {
	if (gryffContent.style.display === "none" && window.innerWidth >= 600) {
		gryffContent.style.display = "flex";
	} else {
		gryffContent.style.display = "none";
	}
});

slythBtn.addEventListener("click", function () {
	if (slythContent.style.display === "none" && window.innerWidth >= 600) {
		slythContent.style.display = "flex";
	} else {
		slythContent.style.display = "none";
	}
});

ravenBtn.addEventListener("click", function () {
	if (ravenContent.style.display === "none" && window.innerWidth >= 600) {
		ravenContent.style.display = "flex";
	} else {
		ravenContent.style.display = "none";
	}
});

huffleBtn.addEventListener("click", function () {
	if (huffleContent.style.display === "none" && window.innerWidth >= 600) {
		huffleContent.style.display = "flex";
	} else {
		huffleContent.style.display = "none";
	}
});
