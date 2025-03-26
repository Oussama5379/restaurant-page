export function createHome() {
	const content = document.querySelector("#content");
	const title = document.createElement("h1");
	const description = document.createElement("p");

	title.textContent = "My restaurant";
	description.textContent = "Hello this is my restaurant home page ,you are welcome between us";

	content.appendChild(title);
	content.appendChild(description);
}
