import Mustache from "mustachejs";

const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7"
const results = document.getElementById('results')
const movieCardTemplate = document.getElementById('movieCardTemplate').innerHTML
const fruitsTemplate = document.getElementById('fruitsTemplate').innerHTML

fetch(url)
.then(response => response.json())
.then((data) => {
    const moviesObj = { movies: data.Search }
    const output = Mustache.render(movieCardTemplate, moviesObj)
    results.innerHTML = output

    // results.insertAdjacentHTML('beforeend', Mustache.render(movieCardTemplate, { movies: data.Search }))
  })















  

// const fruitsObject = {
//   "fruits": [
//     { "name": "apple", "price": 3 },
//     { "name": "pear", "price": 2 },
//     { "name": "banana", "price": 5 }
//   ]
// }

// const fruistOutput = Mustache.render(fruitsTemplate, fruitsObject)
// results.insertAdjacentHTML('beforeend', fruistOutput)
