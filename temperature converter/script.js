const convertButton = document.getElementById("convert-button");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const resultDiv = document.getElementById("result");

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {
  let temperature = temperatureInput.value;
  let unit = unitSelect.value;
  let result;

  if (isNaN(temperature)) {
    resultDiv.innerHTML = "Please enter a valid number.";
    return;
  }

  if (unit === "celsius") {
    result = `${temperature}°C = ${(temperature * 9/5) + 32}°F = ${temperature + 273.15}K`;
  } else if (unit === "fahrenheit") {
    result = `${temperature}°F = ${(temperature - 32) * 5/9}°C = ${((temperature - 32) * 5/9) + 273.15}K`;
  } else if (unit === "kelvin") {
    result = `${temperature}K = ${temperature - 273.15}°C = ${((temperature - 273.15) * 9/5) + 32}°F`;
  }

  resultDiv.innerHTML = result;
}
