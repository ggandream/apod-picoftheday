import { Hero } from "./components/Hero/Hero.js";
import { Nav } from "./components/Nav/Nav.js";
import { Gallery } from "./components/Gallery/Gallery.js";
import data from "./data.json" with { type: "json" };
import data2 from "./data2.json" with { type: "json" };
import { Aside } from "./components/Aside/Aside.js";

const main = document.querySelector("main");

async function getData() {
  const params = new URLSearchParams();
  params.append("api_key", "reFlOnDhmYGVPNBa6V89ZXgVfQDEMVCVWk1UnxQh");
  params.append("date", "2026-07-07");

  const url = `https://api.nasa.gov/planetary/apod?${params}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
const dataf = await getData();

console.log(dataf);

const hero = Hero({
  title: data.title,
  children: data.explanation,
  published: data.date,
});

const slides = [];
console.log(data2[0].url);
slides.push({
  children: data2[0].date.slice(9, 10),
  alt: data2[0].title,
  url: String(data2[0].url),
});
slides.push({
  children: data2[1].date.slice(9, 10),
  alt: data2[1].title,
  url: data2[1].url,
});
slides.push({
  children: data2[2].date.slice(9, 10),
  alt: data2[2].title,
  url: data2[2].url,
});

const nav = Nav();
const gallery = Gallery({ slides });
const aside = Aside({
  title: data.title,
  url: data.url,
  explanation: data.explanation,
  copyright: data.copyright,
});

main.insertAdjacentHTML("afterbegin", aside);
main.insertAdjacentHTML("afterbegin", gallery);
main.insertAdjacentHTML("afterbegin", hero);
main.insertAdjacentHTML("afterbegin", nav);

// Eventos y animaciones

const dateInput = document.querySelector('input[name="date__input"]');
const dateBtn = document.querySelector(".date__btn");

const showAside = document.querySelector('[data-action="show"]');
const closeAside = document.querySelector('[data-action="close"]');
const asideElement = document.querySelector(".aside");

dateBtn.addEventListener("click", () => {
  try {
    dateInput.showPicker();
  } catch (error) {
    console.log(error);
  }
});

showAside.addEventListener("click", () => {
  asideElement.classList.remove("hide");
  asideElement.classList.add("show");
});

closeAside.addEventListener("click", () => {
  asideElement.classList.remove("show");
  asideElement.classList.add("hide");
});

document.body.style.setProperty(
  "background-image",
  `linear-gradient(rgba(10, 14, 26, 0.46), rgba(10, 14, 26, 0.46)), url("${dataf.url}")`,
);
