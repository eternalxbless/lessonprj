"use strict";

for ( let i = 1; i <= 3; i++) {
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     if (numberOfFilms >= 0) {
         continue;
     } 
    const theLastUserFilm = prompt('Один из последних просмотренных фильмов?', '');
     if (typeof theLastUserFilm != undefined) {
         continue;
     }
    const userLastFilmMark = +prompt('На сколько оцените его?', "");
    if (userLastFilmMark >= 0) {
        break;
    }
};



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


      

personalMovieDB.movies[theLastUserFilm] = userLastFilmMark;


console.log(personalMovieDB);