export function createAbout() {
	const content = document.querySelector("#content");
	const title = document.createElement("h1");
	const description = document.createElement("p");

	title.textContent = "CONTACT US";

	content.appendChild(title);
}
