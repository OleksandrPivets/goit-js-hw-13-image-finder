import './sass/main.scss';
import countryCard from './templates/country-card.hbs';
import countryList from './templates/country-list.hbs';
import fetchCountries from './js/fetchCountries';
import { myError } from './js/pnotify';
import { myNotice } from './js/pnotify';
import refs from './js/refs';

const debounce = require('lodash.debounce');
refs.input.addEventListener('input', debounce(onInputChange, 500));

function renderCountryCard(country) {
 const markupCard = countryCard(country);
 refs.cardWrapper.insertAdjacentHTML('beforeend', markupCard);
}

function renderCountriesList(country) {
 const markupList = countryList(country);
 refs.cardWrapper.insertAdjacentHTML('beforeend', markupList);
 document
  .querySelector('.countries-list')
  .addEventListener('click', onCountryClick);
}

function onInputChange(e) {
 const searchQuery = e.target.value;

 fetchCountries(searchQuery).then(onCountrySearch);
}

function onCountrySearch(country) {
 refs.cardWrapper.innerHTML = '';

 if (country.length > 10) {
  return myNotice();
 } else if (country.length >= 2 && country.length <= 10) {
  return renderCountriesList(country);
 } else if (country.length === 1) {
  return renderCountryCard(country);
 } else {
  return myError();
 }
}

function onCountryClick(e) {
 if (e.target.nodeName !== 'LI') {
  return;
 }
 fetchCountries(e.target.textContent).then(onCountrySearch);
}   