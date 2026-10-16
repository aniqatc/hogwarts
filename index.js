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
const houseTraits = {
	Ravenclaw: ['clever', 'creative', 'witty', 'curious', 'observant'],
	Slytherin: ['ambitious', 'cunning', 'pride', 'leadership', 'competitive'],
	Gryffindor: ['brave', 'determination', 'adventurous', 'idealistic', 'daring'],
	Hufflepuff: ['dedicated', 'hardworking', 'loyal', 'patient', 'modest'],
};

const houseMessages = {
	Ravenclaw: name => `🦅 You're a match for Ravenclaw! Congrats, ${name}! We'll be in touch with you soon.`,
	Slytherin: name => `🐍 ${name}, you'd be a great addition to Slytherin! We'll be in touch with you soon.`,
	Gryffindor: name => `🦁 ${name}, you'd be a great addition to Gryffindor! We'll be in touch with you soon.`,
	Hufflepuff: name => `🦡 ${name}, you'd be a great addition to Hufflepuff! We'll be in touch with you soon.`,
};

const notEnoughInfo = `🚨 Sorry, you have not provided enough information.`;

// Returns the age as a number, or null if it's blank or not a real age
const readAge = () => {
	const age = Number(document.querySelector('#age').value);
	return document.querySelector('#age').value.trim() !== '' && age > 0 ? age : null;
};

const apply = () => {
	const name = document.querySelector('#name').value.trim();
	const age = readAge();
	const trait = document.querySelector('#trait').value.toLowerCase().trim();
	const chosenHouse = document.querySelector('#house').value;
	const response = document.querySelector('.submission-response');

	// Underage
	if (age !== null && age < 11) {
		response.textContent = `🎂 Sorry, you are not qualified. Please try again when you reach your 11th birthday!`;
		return;
	}

	// Every field except the house preference is needed to be sorted
	const house = Object.keys(houseTraits).find(key => houseTraits[key].includes(trait));
	if (!name || age === null || !house) {
		response.textContent = notEnoughInfo;
		return;
	}

	// The Sorting Hat decides by trait, but mention the house they asked for if it differs
	const preference =
		chosenHouse && chosenHouse !== house ? ` (You asked for ${chosenHouse}, but the Sorting Hat had other ideas!)` : '';
	response.textContent = houseMessages[house](name) + preference;
};

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', apply);

// Form Status Functionality
const statusCheck = () => {
	const name = document.querySelector('#name').value.trim();
	const age = readAge();
	const applied = document.querySelector('#applied').value.toLowerCase().trim();
	const response = document.querySelector('.submission-response');

	if (!name || age === null || (applied !== 'yes' && applied !== 'no')) {
		response.textContent = notEnoughInfo;
	} else if (age < 11) {
		response.textContent = `🎂 Unfortunately, you're not old enough, ${name}. Please check back in once you've turned 11. `;
	} else if (applied === 'yes') {
		response.textContent = `🦉 Thank you for sending your application, ${name}! You are qualified to attend. An owl will be arriving soon with your decision and instructions.`;
	} else {
		response.textContent = `🪄 You are qualified to apply, ${name}!`;
	}
};
const statusBtn = document.getElementById('status-check-btn');
statusBtn.addEventListener('click', statusCheck);

// Add Hover Functionality for Mobile
const courseListing = document.querySelector('.course-listing-container');
const navButtons = document.querySelector('.hero-nav');
courseListing.addEventListener('touchstart', function () {}, true);
navButtons.addEventListener('touchstart', function () {}, true);
