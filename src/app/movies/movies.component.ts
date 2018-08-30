import { Component, OnInit, Input} from '@angular/core';

import {Movie} from '../movie';
import {MOVIES} from '../mock-movies';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {

  @Input() movies: Movie[];
  displayedColumns: string[] = ['title', 'director', 'year', 'type', 'avgScore'];
  evaluation: any;


  constructor(private movieServie: MovieService) { }

  ngOnInit() {  
    this.addVisualizationOfYourScore();
  }

  checkIfUserIsLogged(){
    if(localStorage.getItem('currentUser')){
      return true;
    }
      else return false;
  }

  onChange(change,movieId) {
    this.movieServie.evaluateMovie(change.value, movieId)
    .subscribe(evalulation => this.evaluation=evalulation);
  }


  addVisualizationOfYourScore(){
    if(this.checkIfUserIsLogged()){
      try{
         this.displayedColumns.push('yourScore');
      }
      catch(Error){
        return null;
      }
    }
  }

}
