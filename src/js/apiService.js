const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24331536-c420ab80445b477a510bfaed4';

export default class ApiService {
 constructor() {
  this.searchQuery = '';
  this.page = 1;
 }

 fetchPhotos() {
  return fetch(
   `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
  )
   .then(response => response.json())
   .then(({ hits }) => {
    this.page += 1;
    return hits;
   });
 }

 resetPage() {
  this.page = 1;
 }

 get query() {
  return this.searchQuery;
 }

 set query(newQuery) {
  this.searchQuery = newQuery;
 }
}