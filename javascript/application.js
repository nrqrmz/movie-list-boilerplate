import Mustache from "mustachejs";

const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7"
const results = document.getElementById('results')
const movieCardTemplate = document.getElementById('movieCardTemplate').innerHTML

fetch(url)
.then(response => response.json())
.then((data) => {
    const movies = data.Search

    movies.forEach((movie) => {
      const output = Mustache.render(movieCardTemplate, movie)
      results.insertAdjacentHTML('beforeend', output)
    });
  })


