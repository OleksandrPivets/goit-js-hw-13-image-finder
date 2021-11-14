export default function fetchCountries(searchCountry) {
    if (searchCountry.length === 0) {
     return Promise.resolve('');
    }
    return fetch(`https://restcountries.com/v2/name/${searchCountry}`).then(
     response => response.json(),
    );
   }