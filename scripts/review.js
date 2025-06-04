const today = new Date();

const yearElement = document.querySelector("#year");

yearElement.innerHTML = today.getFullYear();

let lastModified = document.lastModified;

const lastModifiedElement = document.querySelector("#lastModified");

lastModifiedElement.innerHTML = lastModified;

const count = document.querySelector(".count");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

numVisits++;
localStorage.setItem("numVisits", numVisits);
count.textContent = numVisits;

