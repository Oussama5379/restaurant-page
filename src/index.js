import "./style.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

homeButton.addEventListener("click", () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";
	createHome();
});
menuButton.addEventListener("click", () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";
	createMenu();
});
aboutButton.addEventListener("click", () => {
	const content = document.querySelector("#content");
	content.innerHTML = "";
	createAbout();
});
