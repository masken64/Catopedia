import showResults from "./showResults";

async function searchBreed(event) {
    try {
        event.preventDefault();
        const sb = document.querySelector('#sb');
        const searchItem = sb.value;
        sb.value = '';

        const apiKey = 'live_YodkQgPRJYHjtyX74AfJhvi39BmmRtXyvGGV3uqO00LMyMxI7cLJDRxLVrP9CiQE';
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchItem}`, {
            headers: {
                'x-api-key': apiKey
            },
            mode: 'cors' 
        });

        const data = await response.json();
        console.log(data);

        if (data.length > 0) {
            const breed = data[0];
            const breedName = breed.name;
            const breedDesc = breed.description;
            const breedImage = breed.image?.url;
            const breedOrigin = breed.origin;
            const breedTemprament = breed.temperament;
            const wikiUrl = breed.wikipedia_url;
            const nick = breed.alt_names;
            showResults(breedName, breedDesc, breedImage, breedOrigin, breedTemprament, wikiUrl, nick);
        } else {
            const content = document.querySelector('#content');
            content.textContent = "Oops, we don't have information about that breed yet!";
        }

    } catch (err) {
        console.error(err);
        const content = document.querySelector('#content');
        content.textContent = "Oops, something went wrong!";
    }
}

export default searchBreed;
