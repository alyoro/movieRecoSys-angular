import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-reco',
  templateUrl: './reco.component.html',
  styleUrls: ['./reco.component.css']
})
export class RecoComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getWatchedMovies();
  }

  getWatchedMovies(){
    this.movieService.getWatchedMovies()
    .subscribe(movies => this.movies = movies);
    
  }

}
