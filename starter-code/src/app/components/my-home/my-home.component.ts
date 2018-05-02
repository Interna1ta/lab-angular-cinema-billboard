import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Object[];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    console.log(this.movies);
    // this.movies.push(this.newContact)

    // for (let i=0; i<this.movies.length; i++) {
    //   this.movies[i];
    // }

  }

}



// Load the movies from the Cinema service, with the getMovies() method we've previously defined.
// Display the movies on the / home page.
// Create a link for each movie that directs the user to / movie /: id.
// Style the page.