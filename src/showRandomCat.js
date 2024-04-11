function showRandomCat(cat){
    const myCat = new Image();
    myCat.src = cat;
    myCat.classList.add('gencat');
    const content = document.querySelector('#content');
    content.textContent='';
    content.appendChild(myCat);
    
}
export default showRandomCat;