const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const today = new Date();

const yearElement = document.querySelector("#year");
yearElement.innerHTML = today.getFullYear();

let lastModified = document.lastModified;

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Auckland",
    location: "Auckland, New Zealand",
    dedicated: "2025, April 13",
    area: 45456,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-57810.jpg"
  },
  {
    templeName: "Hamilton",
    location: "Hamilton, New Zealand",
    dedicated: "1958, April 20-22",
    area: 45251,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-31324.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April 25-30",
    area: 72000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-52301.jpg"
  },// Add more temple objects here...
];

const main = document.querySelector('main');

function createTempleCard(temple) {
	const card = document.createElement('section');
	card.classList.add('temple-card');

	const name = document.createElement('h3');
	name.textContent = temple.templeName;

	const location = document.createElement('p');
	location.textContent = `Location: ${temple.location}`;

	const dedicated = document.createElement('p');
	dedicated.textContent = `Dedicated: ${temple.dedicated}`;

	const size = document.createElement('p');
	size.textContent = `Size: ${temple.area} sq ft`;

	const img = document.createElement('img');
	img.src = temple.imageUrl;
	img.alt = temple.templeName;
	img.loading = 'lazy';
	img.width = '400';
	img.height = '250';

	card.appendChild(name);
	card.appendChild(location);
	card.appendChild(dedicated);
	card.appendChild(size);
	card.appendChild(img);
	return card;
}

temples.forEach(temple => {
	const templeCard = createTempleCard(temple);
	main.appendChild(templeCard);
});

const allTemples = document.querySelector('#all');
const oldTemples = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const largeTemples = document.querySelector('#large');
const smallTemples = document.querySelector('#small');

oldTemples.addEventListener('click', () => {
    main.innerHTML = '';
    temples
        .filter(temple => new Date(temple.dedicated.split(',').join(' ')) <= new Date('1990-01-01'))
        .forEach(temple => {
            const templeCard = createTempleCard(temple);
            main.appendChild(templeCard);
        });
});

newTemples.addEventListener('click', () => {
    main.innerHTML = '';
    temples
        .filter(temple => new Date(temple.dedicated.split(',').join(' ')) >= new Date('2000-01-01'))
        .forEach(temple => {
            const templeCard = createTempleCard(temple);
            main.appendChild(templeCard);
        });
});

largeTemples.addEventListener('click', () => {
    main.innerHTML = '';
    temples
        .filter(temple => temple.area > 90000)
        .forEach(temple => {
            const templeCard = createTempleCard(temple);
            main.appendChild(templeCard);
        });

		
});

smallTemples.addEventListener('click', () => {
    main.innerHTML = '';
    temples
        .filter(temple => temple.area < 10000)
        .forEach(temple => {
            const templeCard = createTempleCard(temple);
            main.appendChild(templeCard);
        });
});

allTemples.addEventListener('click', () => {
    main.innerHTML = '';
    temples.forEach(temple => {
	const templeCard = createTempleCard(temple);
	main.appendChild(templeCard);
});
});