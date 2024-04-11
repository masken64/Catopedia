import homeKitten from "./assets/kitten-home.png";

function loadHome() {
  const home = document.querySelector("#content");
  home.innerHTML = `<div class="welcome">
<div class="lwel"></div>
<div class="rwel">
<h1 class="welmess">Welcome to Catopedia</h1>
<h3 class="sub-wel">Your feline haven!</h3>
<p class="home-text">Powered by The Cat API, dive into the world of cats, get images and info on various breeds and have fun with our Random Cat Generator</p>
<p class="get-started">Search a breed to get started!</p>
</div>
</div>`;

  const homeKittenCont = document.querySelector(".lwel");
  const myKitten = new Image();
  myKitten.src = homeKitten;
  myKitten.classList.add("kitten-image");
  homeKittenCont.appendChild(myKitten);
}
export default loadHome;
