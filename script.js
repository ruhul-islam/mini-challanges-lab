"use strict";

let sum = 0;
const totalParagraph = document.querySelector(".total");
// console.dir(totalParagraph);  --- to check
const moneyForm = document.querySelector(".money-form");
const coinContainer = document.querySelector(".coin-container");
const bulb = document.querySelector(".bulb");
const on = document.querySelector(".onBtn");
const off = document.querySelector(".offBtn");
const toggle = document.querySelector(".toggleBtn");
const end = document.querySelector(".endBtn");

const buttons = document.querySelectorAll(".vending button");
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    sum += parseInt(item.getAttribute("data-cost"));
    totalParagraph.textContent = `Total $${sum}.00`;
  });
});

// const colaBtn = document.querySelector(".cola");
// const peanutsBtn = document.querySelector(".peanuts");
// const ChocolatBtn = document.querySelector(".chocolate");
// const gummiesBtn = document.querySelector(".gummies");

// colaBtn.addEventListener("click", () => {
//   sum += 2;
//   totalParagraph.textContent = `Total $${sum}.00`;
// });
// peanutsBtn.addEventListener("click", () => {
//   sum += 3;
//   totalParagraph.textContent = `Total $${sum}.00`;
// });
// ChocolatBtn.addEventListener("click", () => {
//   sum += 4;
//   totalParagraph.textContent = `Total $${sum}.00`;
// });
// gummiesBtn.addEventListener("click", () => {
//   sum += 6;
//   totalParagraph.textContent = `Total $${sum}.00`;
// });

////////////////////////////////////////////// 2 ///////////////////////////////////////////////
moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount").value;
  const type = document.querySelector("#type").value;
  for (let i = 0; i < amount; i++) {
    const newCoin = document.createElement("li");
    newCoin.textContent = type;
    newCoin.classList.add("coin", type);
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

//////////////////////////////////// 3///////////////////////////////////////////////
on.addEventListener("click", () => {
  bulb.classList.add("on");
});
off.addEventListener("click", () => {
  bulb.classList.remove("on");
});
toggle.addEventListener("click", () => {
  bulb.classList.toggle("on");
});

end.addEventListener("click", () => {
  bulb.remove();
  on.disabled = true;
  off.disabled = true;
  toggle.disabled = true;
  end.disabled = true;
});
