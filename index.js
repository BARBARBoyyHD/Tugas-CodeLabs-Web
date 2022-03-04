const API_KEY = 'api_key=91db5ab3669ca7e1ae3faa5b67917a9e';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById("main");

getMovies(API_URL)
async function getMovies(API_URL){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results)
    })
}



async function showMovies(data)
{
    
    data.array.forEach(element => {
        
    });(movie => {
        const{title,poster_path,vote_average,overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average} </span>
        </div>
        <div class="overview">
        h3>Overview</h3>
        ${overview}
        </div>
        `

        main.appendChild(movieEl);
    })
}
 
function getColor(vote)
{
    if(vote>= 8)
    {
        return 'green';
    }else if(vote >= 5){
        return"orange";
    }else{
        return 'red'
    }
}

