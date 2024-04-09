import logo from "./assets/logo.png";
import "./styles.css";
import bg from "./assets/bg.svg";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadHall from "./halloffame.js";

const logoDiv = document.querySelector(".logo");
loadLogo(logoDiv);
function loadLogo(element) {
  const myLogo = new Image();
  myLogo.src = logo;
  element.appendChild(myLogo);
  myLogo.classList.add("logo-image");
}
//loadHome();
const body = document.querySelector("body");
body.style.backgroundImage = `url(${bg})`;

const home = document.querySelector(".home");
home.addEventListener("click", loadHome);

const about = document.querySelector(".about");
about.addEventListener("click", loadAbout);

const hof = document.querySelector(".hof");
hof.addEventListener("click", loadHall);
