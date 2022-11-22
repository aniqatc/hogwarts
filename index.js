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

houseBtns[0].addEventListener("click", function () {
	if (houseContent[0].style.display === "none" && window.innerWidth >= 600) {
		houseContent[0].style.display = "flex";
		houseContent[1].style.display = "none";
		houseContent[2].style.display = "none";
		houseContent[3].style.display = "none";
	} else {
		houseContent[0].style.display = "none";
	}
});

houseBtns[1].addEventListener("click", function () {
	if (houseContent[1].style.display === "none" && window.innerWidth >= 600) {
		houseContent[1].style.display = "flex";
		houseContent[0].style.display = "none";
		houseContent[2].style.display = "none";
		houseContent[3].style.display = "none";
	} else {
		houseContent[1].style.display = "none";
	}
});

houseBtns[3].addEventListener("click", function () {
	if (houseContent[3].style.display === "none" && window.innerWidth >= 600) {
		houseContent[3].style.display = "flex";
		houseContent[0].style.display = "none";
		houseContent[1].style.display = "none";
		houseContent[2].style.display = "none";
	} else {
		houseContent[3].style.display = "none";
	}
});

houseBtns[2].addEventListener("click", function () {
	if (houseContent[2].style.display === "none" && window.innerWidth >= 600) {
		houseContent[2].style.display = "flex";
		houseContent[0].style.display = "none";
		houseContent[1].style.display = "none";
		houseContent[3].style.display = "none";
	} else {
		houseContent[2].style.display = "none";
	}
});

let expandAll = document.querySelector(".expand-houses");
expandAll.addEventListener("click", function () {
	houseContent.forEach(function (house) {
		if (house.style.display === "none") {
			house.style.display = "flex";
		} else {
			house.style.display = "none";
		}
	});
});
