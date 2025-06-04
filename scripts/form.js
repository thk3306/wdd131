const today = new Date();


const yearElement = document.querySelector("#year");

yearElement.innerHTML = today.getFullYear();

let lastModified = document.lastModified;

const lastModifiedElement = document.querySelector("#lastModified");

lastModifiedElement.innerHTML = lastModified;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector('select[name="product"]');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
})

const countSpans = document.querySelectorAll(".count");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

numVisits++;
localStorage.setItem("numVisits", numVisits);

countSpans.forEach(span => {
    span.textContent = numVisits;
});

