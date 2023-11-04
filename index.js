/* SMOOTH SCROLLING */
const links = document.querySelectorAll('.hero-nav a');
const navContainer = document.querySelector('.hero-nav');

navContainer.addEventListener('click', event => {
	event.preventDefault();
	const href = event.target.closest('a').getAttribute('href');
	document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
});

/* STICKY NAV */
const navElement = document.querySelector('.hero-container');
const navObserver = new IntersectionObserver(
	function (entries) {
		entries[0].isIntersecting !== true
			? navElement.classList.add('sticky')
			: navElement.classList.remove('sticky');
	},
	{
		root: null,
		threshold: 0.5,
	}
);

navObserver.observe(navElement);

// EXPAND ALL HOUSE CARD DETAILS
const expandAll = document.querySelector('.expand-houses');
expandAll.addEventListener('click', function () {
	houseContent.forEach(function (house) {
		house.style.display = 'flex';
	});
});

// TOGGLE BETWEEN DIFFERENT CONTENT
const houseBtns = [
	document.querySelector('#gryffindor-btn'),
	document.querySelector('#slytherin-btn'),
	document.querySelector('#hufflepuff-btn'),
	document.querySelector('#ravenclaw-btn'),
];

const houseContent = [
	document.querySelector('#gryffindor'),
	document.querySelector('#slytherin'),
	document.querySelector('#hufflepuff'),
	document.querySelector('#ravenclaw'),
];

houseBtns.forEach((button, index) => {
	button.addEventListener('click', () => {
		houseContent.forEach(content => (content.style.display = 'none'));
		houseContent[index].style.display = 'flex';
	});
});

// Form Apply Functionality
const apply = () => {
	const name = document.querySelector('#name').value;
	const age = document.querySelector('#age').value;
	const trait = document.querySelector('#trait').value;
	const response = document.querySelector('.submission-response');
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

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', apply);

// Form Status Functionality
const statusCheck = () => {
	const name = document.querySelector('#name').value;
	const age = document.querySelector('#age').value;
	const applied = document.querySelector('#applied').value;
	const response = document.querySelector('.submission-response');
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
const statusBtn = document.getElementById('status-check-btn');
statusBtn.addEventListener('click', statusCheck);

// Add Hover Functionality for Mobile
const courseListing = document.querySelector('.course-listing-container');
const navButtons = document.querySelector('.hero-nav');
courseListing.addEventListener('touchstart', function () {}, true);
navButtons.addEventListener('touchstart', function () {}, true);
