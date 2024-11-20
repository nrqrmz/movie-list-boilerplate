const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7"
const results = document.getElementById('results')

fetch(url)
.then(response => response.json())
.then((data) => {
    const movies = data.Search

    movies.forEach((movie) => {
      const movieCard = `<div class='col-3'>
        <div class="card shadow mb-4">
          <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
          <div class="card-body">
            <h2 class="card-title">${movie.Title}</h2>
            <p class="card-text">${movie.Year}</p>
            <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
          </div>
        </div>
      </div>`

      results.insertAdjacentHTML('beforeend', movieCard)
    });
  })
