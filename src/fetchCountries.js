import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://restcountries.com/v3.1/';

function fetchCountries(name) {
    const url = `${BASE_URL}/name/${name}?fields = name,capital,population,flags,languages;`;
    return fetch(url).then(response => {
        if (response.ok !== true) {
            Notify.failure('There is no country with that name')
        }
        return response.json();
    });
};

export default { fetchCountries };