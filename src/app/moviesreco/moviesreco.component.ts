import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../_services/movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-moviesreco',
  templateUrl: './moviesreco.component.html',
  styleUrls: ['./moviesreco.component.css']
})
export class MoviesrecoComponent implements OnInit {

  @Input() movies: Movie[];
  displayedColumns: string[] = ['title', 'director', 'year', 'type', 'avgScore', 'yourScore','reco'];
  recoSelect: string;

  moviesReco: Movie[];

  constructor(private movieServie: MovieService) { }

  ngOnInit() {  
 
  }

  onClick(movie){
    console.log("jestem1")
    this.movieServie.getRecommendationMovies(movie, this.recoSelect)
    .subscribe(movies => this.moviesReco = movies);
  }
}
