/* SMOOTH SCROLLING */
const links = document.querySelectorAll('a:not(.social-links)');

links.forEach(function (link) {
	link.addEventListener('click', function (el) {
		el.preventDefault();
		/* LINKS */
		const href = link.getAttribute('href');
		if (href !== '#' && href.startsWith('#')) {
			const sectionElement = document.querySelector(href);
			sectionElement.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

/* STICKY NAV */
const navElement = document.querySelector('.hero-container');
const navObserver = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (ent.isIntersecting !== true) {
			navElement.classList.add('sticky');
		} else {
			navElement.classList.remove('sticky');
		}
	},
	{
		root: null,
		threshold: 0.5,
	}
);

navObserver.observe(navElement);

// EXPAND ALL HOUSE CARD DETAILS
let expandAll = document.querySelector('.expand-houses');
expandAll.addEventListener('click', function () {
	houseContent.forEach(function (house) {
		house.style.display = 'flex';
	});
});

// TOGGLE BETWEEN DIFFERENT CONTENT DIVS
let gryffBtn = document.querySelector('#gryffindor-btn');
let slythBtn = document.querySelector('#slytherin-btn');
let huffleBtn = document.querySelector('#hufflepuff-btn');
let ravenBtn = document.querySelector('#ravenclaw-btn');
let houseBtns = [gryffBtn, slythBtn, huffleBtn, ravenBtn];

let gryffContent = document.querySelector('#gryffindor');
let slythContent = document.querySelector('#slytherin');
let huffleContent = document.querySelector('#hufflepuff');
let ravenContent = document.querySelector('#ravenclaw');
let houseContent = [gryffContent, slythContent, huffleContent, ravenContent];

for (let i = 0; i < houseBtns.length; i++) {
	houseBtns[i].addEventListener('click', function () {
		for (let a = 0; a < houseContent.length; a++) {
			houseContent[a].style.display = 'none';
		}
		houseContent[i].style.display = 'flex';
	});
}

// Form Apply Functionality
let apply = () => {
	let name = document.querySelector('#name').value;
	let age = document.querySelector('#age').value;
	let trait = document.querySelector('#trait').value;
	let response = document.querySelector('.submission-response');

	trait = trait.toLowerCase().trim();

	// Underage
	if (age < 11 && age > 0) {
		response.textContent = `🎂 Sorry, you are not qualified. Please try again when you reach your 11th birthday!`;

		// Ravenclaw
	} else if (
		(age >= 11 && trait === 'clever') ||
		trait === 'creative' ||
		trait === 'witty' ||
		trait === 'curious' ||
		trait === 'observant'
	) {
		response.textContent = `🦅 You're a match for Ravenclaw! Congrats, ${name}! We'll be in touch with you soon.`;

		// Slytherin
	} else if (
		(age >= 11 && trait === 'ambitious') ||
		trait === 'cunning' ||
		trait === 'pride' ||
		trait === 'leadership' ||
		trait === 'competitive'
	) {
		response.textContent = `🐍 ${name}, you'd be a great addition to Slytherin! We'll be in touch with you soon.`;

		// Gryffindor
	} else if (
		(age >= 11 && trait === 'brave') ||
		trait === 'determination' ||
		trait === 'adventurous' ||
		trait === 'idealistic' ||
		trait === 'daring'
	) {
		response.textContent = `🦁 ${name}, you'd be a great addition to Gryffindor! We'll be in touch with you soon.`;

		// Hufflepuff
	} else if (
		(age >= 11 && trait === 'dedicated') ||
		trait === 'hardworking' ||
		trait === 'loyal' ||
		trait === 'patient' ||
		trait === 'modest'
	) {
		response.textContent = `🦡 ${name}, you'd be a great addition to Hufflepuff! We'll be in touch with you soon.`;
	} else {
		// Empty Responses
		response.textContent = `🚨 Sorry, you have not provided enough information.`;
	}
};

let applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', apply);

// Form Status Functionality
let statusCheck = () => {
	let name = document.querySelector('#name').value;
	let age = document.querySelector('#age').value;
	let applied = document.querySelector('#applied').value;
	let response = document.querySelector('.submission-response');

	applied = applied.toLowerCase().trim();

	if (age >= 11 && applied === 'yes') {
		response.textContent = `🦉 Thank you for sending your application, ${name}! You are qualified to attend. An owl will be arriving soon with your decision and instructions.`;
	} else if ((age <= 11 && applied === 'no') || applied === 'yes') {
		response.textContent = `🎂 Unfortunately, you're not old enough, ${name}. Please check back in once you've turned 11. `;
	} else if (age >= 11 && applied === 'no') {
		response.textContent = `🪄 You are qualified to apply, ${name}!`;
	} else {
		response.textContent = `🚨 Sorry, you have not provided enough information.`;
	}
};
let statusBtn = document.getElementById('status-check-btn');
statusBtn.addEventListener('click', statusCheck);

// Add Hover Functionality for Mobile
let courseListing = document.querySelector('.course-listing-container');
let navButtons = document.querySelector('.hero-nav');
courseListing.addEventListener('touchstart', function () {}, true);
navButtons.addEventListener('touchstart', function () {}, true);
