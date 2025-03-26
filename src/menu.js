export function createMenu() {
	const content = document.querySelector("#content");
	const title = document.createElement("h1");
	const description = document.createElement("p");

	title.textContent = "Our Menu";
	description.textContent = "Please Choose an option from our menu";

	content.appendChild(title);
	content.appendChild(description);
}
