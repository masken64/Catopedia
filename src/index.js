import logo from "./assets/logo.png";
import "./styles.css";
import bg from "./assets/bg.svg";
const logoDiv = document.querySelector(".logo");
loadLogo(logoDiv);
function loadLogo(element) {
  const myLogo = new Image();
  myLogo.src = logo;
  element.appendChild(myLogo);
  myLogo.classList.add("logo-image");
}

const body = document.querySelector("body");
