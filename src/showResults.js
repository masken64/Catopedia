function showResults(name,desc,image,origin,temperament,wiki,nick){
    const content = document.querySelector('#content');
    content.innerHTML = `<div class="results">
    <div class="lres">
      <div class="resimg"></div>
      <div class="origin">Origin: ${origin}</div>
    </div>
    <div class="rres">
      <div class="resname">${name}</div>
      <div class="resdesc">${desc}</div>
      <div class="tempra">Temprament: ${temperament}</div>
      <div class="nick">Other Names: ${nick}</div>
      <div class="wikiurl"><a href="${wiki}" rel="noreffer" target="_blank">Click to Know More</a></div>
    </div>
  </div>`

  const myCat = new Image();
  myCat.src = image;
  const resimg = document.querySelector('.resimg');
  myCat.classList.add('catimg');
  resimg.appendChild(myCat);
}
export default showResults;