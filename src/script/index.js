"use strict";

const inputTemperature = document.querySelector(".input");
const convertTemperature = document.querySelector(".convert");
const radioButton = document.querySelectorAll('input[name="temperature"]');
const output = document.querySelector(".output");
const changeBackground = document.querySelector(".changeBg");
const body = document.querySelector("body");

function convertToFarenheit(celcius) {
  if (!isNaN(celcius)) {
    return celcius * (9 / 5) + 32;
  }
  return false;
}

function convertToCelcius(fahrenheit) {
  if (!isNaN(fahrenheit)) {
    return (fahrenheit - 32) * (5 / 9);
  }
  return false;
}

function getTemperatureInFarenheit() {
  if (!convertToFarenheit(inputTemperature.value)) {
    output.innerText = "Please, enter a valid number";
  } 
  output.innerText = `${inputTemperature.value} C = ${convertToFarenheit(
    inputTemperature.value
  ).toFixed(1)} F`;
  return output.innerText;
}

function getTemperatureInCelcius() {
  if (!convertToCelcius(inputTemperature.value)) {
    output.innerText = "Please, enter a valid number";
  } 
  output.innerText = `${inputTemperature.value} F = ${convertToCelcius(
    inputTemperature.value
  ).toFixed(1)} C`;
  return output.innerText;
}

function handleModes() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    changeBackground.textContent = "Dark Mode";
    inputTemperature.style.background = "#efefef";
    inputTemperature.style.color = "#1b1c1e";
    output.style.background = "#f0f1ff";
    output.style.color = "#1b1c1e";
  } 
  else {
    body.classList.add("dark-mode");
    changeBackground.textContent = "Light Mode";
    inputTemperature.style.background = "#1d1e22";
    output.style.background = "#42454b";
    inputTemperature.style.color = "#f0f1ff";
    output.style.color = "#f0f1ff";
  }
}

function handleRadioButtons() {
  const radioBtnArr = Array.from(radioButton);
  radioBtnArr.forEach(element => {
    element.checked && element.value === 'celcius' ?
      getTemperatureInCelcius()
    :
      getTemperatureInFarenheit();
  });
}

convertTemperature.addEventListener("click", handleRadioButtons);
changeBackground.addEventListener("click", handleModes);
