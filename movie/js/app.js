/*Алгоритм 
1. Зарегистрироваться и получить API KEY на сайте https://kinopoiskapiunofficial.tech
2. Определить константы:
Запрос на выдачу Популярных фильмов
https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1
Запрос на поиск фильмов
https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=
3. Написать функцию получения фильмов по запросу
4. Написать функцию показа фильмов на страничке: в div .movies для каждого фильма нужно добавить 
новый элемент div с классом.movie и использовать innerHTML для структуры div и использовать там 
получаемые значения для каждого фильма (${movie.posterUrlPreview}, ${movie.nameRu} и тд 
)
5. Написать функцию поиска - использовать Url на поиск фильмов
6. Реализовать изменение цвета рейтинга по значению: зеленый -рейтинг больше 7, желтый от 5 до 7, красный меньше 5 */

const API_KEY = "28fb6b60-9d0b-491a-b89f-29287b8e47a9";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function getClassByRate(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote > 5) {
    return "orange";
  } else {
    return "red";
  }
}

function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  moviesEl.innerHTML = "";

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <div class="movie__cover-inner">
          <img
            src="${movie.posterUrlPreview}"
            class="movie__cover"
            alt="${movie.nameRu}"
          />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
          <div class="movie__title">${movie.nameRu}</div>
          <div class="movie__category">${movie.genres.map(
            (genre) => ` ${genre.genre}`
          )}</div>
          <div class="movie__rating">
            <span class="rating" style="color: ${getClassByRate(movie.rating)};">
              ${movie.rating ? movie.rating : 'Нет рейтинга'}
            </span>
          </div>
        </div>
        `;
    moviesEl.appendChild(movieEl);
  });
}

const form = document.querySelector("form");
const search = document.querySelector(".header__search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    getMovies(apiSearchUrl);
    search.value = "";
  }
});