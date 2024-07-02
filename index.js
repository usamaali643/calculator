const userInput = document.getElementById("displayValue");

function appendToDisplay(input) {
  userInput.value += input;
}

function clearAll() {
  userInput.value = " ";
}

function calculateValue() {
  try {
    userInput.value = eval(userInput.value);
  } catch (error) {
    userInput.value = "Error";
  }
}
