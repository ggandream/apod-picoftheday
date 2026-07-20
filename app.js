import { Hero } from "./components/Hero/Hero.js";
import { Nav } from "./components/Nav/Nav.js";

const main = document.querySelector("main");

const hero = Hero({
  title: "NGC 6188: Dragons of Ara",
  children:
    "Where can you find dragons fighting in the night sky? In the southern constellation of the Altar: Ara. The dragons are, of course, actually made of...",
  published: "Published on July 08, 2026",
});

const nav = Nav();
main.insertAdjacentHTML("beforebegin", nav);
main.insertAdjacentHTML("beforeend", hero);

const dateInput = document.querySelector('input[name="date__input"]');
const dateBtn = document.querySelector(".date__btn");

dateBtn.addEventListener("click", () => {
  try {
    dateInput.showPicker();
  } catch (error) {
    console.log(error);
  }
});
