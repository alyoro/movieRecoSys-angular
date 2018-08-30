import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  submitted = false;
  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      formMovieTitle: ['']
    });
  }

  get f() { return this.searchForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }
    this.movieService.searchMovie(this.f.formMovieTitle.value)
    .subscribe(
      movies => {this.movies = movies;}
    )
  }
}
