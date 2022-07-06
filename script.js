"use strict";

let sum = 0;
const totalParagraph = document.querySelector(".total");
const cola = document.querySelector(".cola");
const peanuts = document.querySelector(".peanuts");
const chocolate = document.querySelector(".chocolate");
const gummies = document.querySelector(".gummies");
const changeForm = document.querySelector(".change-form");
const coinContainer = document.querySelector(".coin-container");

cola.addEventListener("click", () => {
  sum += 2;
  totalParagraph.textContent = `Total: $${sum}.00`;
});

peanuts.addEventListener("click", () => {
  sum += 3;
  totalParagraph.textContent = `Total: $${sum}.00`;
});
chocolate.addEventListener("click", () => {
  sum += 4;
  totalParagraph.textContent = `Total: $${sum}.00`;
});
gummies.addEventListener("click", () => {
  sum += 6;
  totalParagraph.textContent = `Total: $${sum}.00`;
});

changeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount").value;
  const type = document.querySelector("#type").value;
  for (let i = 0; i < amount; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add("coin", type);
    newCoin.textContent = type;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

/////////////////////3//////////////////

const lightbulb = document.querySelector(".lightbulb");
const turnOn = document.querySelector(".on");
const turnOff = document.querySelector(".off");
const toggleLight = document.querySelector(".toggle");
const powerOutage = document.querySelector(".end");

turnOn.addEventListener("click", () => {
  lightbulb.style.backgroundColor = "yellow";
});

turnOff.addEventListener("click", () => {
  lightbulb.style.backgroundColor = "darkgrey";
});

toggleLight.addEventListener("click", () => {
  const backgroundColor = lightbulb.style.backgroundColor;
  if (backgroundColor === "darkgrey") {
    lightbulb.style.backgroundColor = "yellow";
  } else {
    lightbulb.style.backgroundColor = "darkgrey";
  }
});

powerOutage.addEventListener("click", () => {
  lightbulb.remove();
  turnOn.disabled = true;
  turnOff.disabled = true;
  toggleLight.disabled = true;
  powerOutage.disabled = true;
});
