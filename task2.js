"use strict";

for ( let i = 1; i <= 3; i++) {
    do {
        const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        if (numberOfFilms >= 0) {
            continue;
        } 
    } while (numberOfFilms.length === 0 || numberOfFilms === " " || numberOfFilms === null);
    do {
        const theLastUserFilm = prompt('Один из последних просмотренных фильмов?', '');
        if (typeof theLastUserFilm != undefined) {
            continue;
     }
    } while (theLastUserFilm.length === 0 || theLastUserFilm === " " || theLastUserFilm.length >= 50 || theLastUserFilm === null);
    do{
        const userLastFilmMark = +prompt('На сколько оцените его?', "");
        if (userLastFilmMark > 0) {
            break;
    }
    } while (userLastFilmMark.length === 0 || userLastFilmMark === " " || userLastFilmMark === null);
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