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

  constructor() { }

  ngOnInit() {  
  }


}
