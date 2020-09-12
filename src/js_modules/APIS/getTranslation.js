// import API_KEYS from "../data/API_KEYS";

// export default async function getTranslation(request) {
//     try {
//         const url = `https://language.googleapis.com/v1/documents:analyzeEntities?key=${API_KEYS.googleAPIKey}&text=${request}&lang=${localStorage.currentLang}`;
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.log(`Unable to get translation of current location name ${err}`);
//     }
// }

import API_KEYS from "../data/API_KEYS";

export default async function getTranslation(request) {
    try {
        const url = `https://google-translate1.p.rapidapi.com/language/translate/v2/languages?x-rapidapi-host=google-translate1.p.rapidapi.com
        &x-rapidapi-key=${API_KEYS.googleAPIKey}&accept-encoding=application/gzip&q=${request}&target=${localStorage.currentLang}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(`Unable to get translation of current location name ${err}`);
    }
}
