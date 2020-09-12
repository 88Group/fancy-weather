import API_KEYS from '../data/API_KEYS';
import properties from '../data/properties.js';
import getSeason from '../helpers/getSeason';

export default async function getImages() {
    try {
        const url = `https://api.unsplash.com/photos/random?query=weather,${getSeason()},${properties.partOfDay}&client_id=${API_KEYS.unsplashAPIKey}`;
        const response = await fetch(url);
        const json = await response.json();
        const responsive = await fetch(json.urls.regular);
        const blob = await responsive.blob();
        const bg = URL.createObjectURL(blob);
        document.querySelector('.main-screen').style.backgroundImage = `url(${bg})`;
    } catch (err) {
        document.querySelector('.main-screen').style.backgroundImage = `url(${require('../../assets/images/bg1.jpg')})`;
        console.log(`Unable to get images on request ${err}`);
    }
}
