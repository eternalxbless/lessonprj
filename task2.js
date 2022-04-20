"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');






const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


      
for ( let i = 0; i < 2; i++) {
    const theLastUserFilm = prompt('Один из последних просмотренных фильмов?', '');
    const userLastFilmMark = +prompt('На сколько оцените его?', "");
    personalMovieDB.movies[theLastUserFilm] = userLastFilmMark;
   
};



console.log(personalMovieDB);