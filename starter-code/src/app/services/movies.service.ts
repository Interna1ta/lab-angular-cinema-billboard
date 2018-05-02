import { Injectable } from '@angular/core';
import moviesList from '../../sample-movies';

@Injectable()
export class MoviesService {
  movies: any[];
  
  constructor() {
    this.movies = moviesList;
  }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.find((movie) => {
      return movie.id === id;
    });
  }

}
