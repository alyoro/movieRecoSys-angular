import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie[];

  ngOnInit() {
    // this.movieService.searchMovie("testTitle")
    // .subscribe(movies => this.movies = movies);
  }

  // onSubmit(){
  //   this.movieService.searchMovie("testTit")
  //   .subscribe(movies => this.movies = movies);
  // }


}
