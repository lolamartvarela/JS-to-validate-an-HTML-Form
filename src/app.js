/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let form = document.getElementById("formulario"); //obtener el elemento

  form.addEventListener("submit", envioFormulario); //manipular el elemento

  let mensajeAlerta = document.getElementById("mensajeAlerta");
  let Cardnumber = document.getElementById("Cardnumber");
  let CVC = document.getElementById("CVC");
  let Amount = document.getElementById("Amount");
  let FirstName = document.getElementById("FirstName");
  let LastName = document.getElementById("LastName");
  let City = document.getElementById("City");
  let State = document.getElementById("State");
  let PostalCode = document.getElementById("PostalCode");
  let Message = document.getElementById("Message");

  function envioFormulario(event) {
    event.preventDefault();

    // Condicion para cambiar color de card
    if (Cardnumber.value === "") {
      Cardnumber.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      Cardnumber.style.background = "white";
    }

    // Condicion para cambiar color de cvc
    if (CVC.value === "") {
      CVC.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      CVC.style.background = "white";
    }

    // Condicion para cambiar color de amount
    if (Amount.value === "") {
      Amount.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      Amount.style.background = "white";
    }

    // Condicion para cambiar color de firstName
    if (FirstName.value === "") {
      FirstName.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      FirstName.style.background = "white";
    }

    // Condicion para cambiar color de lastName
    if (LastName.value === "") {
      LastName.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      LastName.style.background = "white";
    }

    // Condicion para cambiar color de city
    if (City.value === "") {
      City.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      City.style.background = "white";
    }

    // Condicion para cambiar color de state
    if (State.value === "Pick a state") {
      State.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      State.style.background = "white";
    }

    // Condicion para cambiar color de postalCode
    if (PostalCode.value === "") {
      PostalCode.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      PostalCode.style.background = "white";
    }

    // Condicion para cambiar color de message
    if (Message.value === "") {
      Message.style.background = "rgb(242, 214, 214)";
      mensajeAlerta.style.display = "block";
    } else {
      Message.style.background = "white";
    }
  }
};
