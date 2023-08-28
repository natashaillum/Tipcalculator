const totalAmount = document.querySelector(".total-amount");
const calculateBtn = document.querySelector(".btn-tip");
const tipTenPercent = document.querySelector(".ten-p");
const tipFifteenPercent = document.querySelector(".fifteen-p");
const tipTwentyPercent = document.querySelector(".twenty-p");
const deleteBtn = document.querySelector(".btn");

const billInput = document.querySelector("#bill-amount-input");

deleteBtn.addEventListener("click", () => {
  billInput.value = "";
  totalAmount.innerHTML = "$";
});

let selectedTip;

tipTenPercent.addEventListener("click", () => {
  selectedTip = "10";
  tipTenPercent.classList.add("selected");
});

tipFifteenPercent.addEventListener("click", () => {
  selectedTip = "15";
  tipFifteenPercent.classList.add("selected");
});

tipTwentyPercent.addEventListener("click", () => {
  selectedTip = "20";
  tipTwentyPercent.classList.add("selected");
});

// calculate tip
function calculateTip(percent) {
  const billAmount = document.querySelector("#bill-amount-input").value;
  const tipAmount = (billAmount * percent) / 100;
  return tipAmount;
}

//  selects tip amount and displays total
function displayTip() {
  if (selectedTip) {
    // calculate tip from selectedTip
    const tip = calculateTip(selectedTip);

    // display total
    totalAmount.innerHTML = `$${tip}`;
    // reset selected tip
    selectedTip = null;
  }
}

// calculate button
calculateBtn.addEventListener("click", () => {
  if (selectedTip) {
    calculateTip(selectedTip);
    displayTip();
    unselectButtons();
  }
});

function unselectButtons() {
  tipTenPercent.classList.remove("selected");
  tipFifteenPercent.classList.remove("selected");
  tipTwentyPercent.classList.remove("selected");
}
