import showRandomCat from './showRandomCat.js';
async function randomGen(){
   try{
    const apiKey = 'live_YodkQgPRJYHjtyX74AfJhvi39BmmRtXyvGGV3uqO00LMyMxI7cLJDRxLVrP9CiQE';

    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1`, {
        headers: {
            'x-api-key': apiKey
        },
        mode: 'cors' 
    });
    const data = await response.json();
    if (data.length > 0) {
        const image = data[0];
        const cat = image.url;
        showRandomCat(cat);
    }
   }catch(err){
    console.error(err);
   }
}
export default randomGen;