// Write your code here!
main.remove();

let element = document.createElement("div");

let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "YOUR-NAME is the champion";

document.body.append(element);
element.append(newHeader);