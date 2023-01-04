/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let form = document.querySelector("form");

  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();

    let Cardnumber = document.getElementById("Cardnumber");
    let CVC = document.getElementById("CVC");
    let Amount = document.getElementById("Amount");
    let FirstName = document.getElementById("FirstName");
    let inputLastName = document.getElementById("inputLastName");
    let inputCity = document.getElementById("inputCity");
    let inputState = document.getElementById("inputState");
    let inputPostalCode = document.getElementById("inputPostalCode");
    let Message = document.getElementById("Message");
    let alert = document.getElementById("alert");

    console.log(Cardnumber.value);
    console.log(CVC.value);
    console.log(Amount.value);
    console.log(FirstName.value);
    console.log(inputLastName.value);
    console.log(inputCity.value);
    console.log(inputState.value);
    console.log(inputPostalCode.value);
    console.log(Message.value);
    console.log(alert.value);

    if (Cardnumber.value === "") {
      document.getElementById("Cardnumber");
    }
  }
};
