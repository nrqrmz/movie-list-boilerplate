const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7"
const results = document.getElementById('results')
const movieCardTemplate = document.getElementById('movieCardTemplate')

fetch(url)
.then(response => response.json())
.then((data) => {
    const movies = data.Search

    movies.forEach((movie) => {
      const clone = movieCardTemplate.content.cloneNode(true)
      clone.querySelector('img').src = movie.Poster
      clone.querySelector('img').alt = `${movie.Title} poster`
      clone.querySelector('h2').textContent = movie.Title
      clone.querySelector('p').textContent = movie.Year
      clone.querySelector('a').href = `https://www.imdb.com/title/${movie.imdbID}`

      results.appendChild(clone)
    });
  })
