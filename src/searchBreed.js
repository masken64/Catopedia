function searchBreed(event){
    event.preventDefault();
    const sb = document.querySelector('#sb');
    const searchItem = sb.value;
    sb.value = '';
    
}

export default searchBreed;