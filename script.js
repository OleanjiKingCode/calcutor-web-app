function calculate() {
  // Getting input values
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const operator = document.getElementById("operator").value;

  // Convert input values to numbers
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  // checking errors 
  if (isNaN(num1)) {
    alert("Enter a valid number for the first input");
  }
  if (isNaN(num2)) {
    alert("Enter a valid number for the second input");
  }
  // Perform calculation
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "Invalid operator";
  }

  // Result
  document.getElementById("result").innerHTML = result;
}
