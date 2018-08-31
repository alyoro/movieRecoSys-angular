import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MovieService } from '../_services/movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-adding-movie',
  templateUrl: './adding-movie.component.html',
  styleUrls: ['./adding-movie.component.css']
})
export class AddingMovieComponent implements OnInit {

  addingForm: FormGroup;
  submitted = false;
  movie: Movie;
  arrayYear: number[];
  arrayType: string[] = ['Drama','Comedy','Thriller','Sci-Fi','Criminal','Adventure','Fantasy','Horror','Animation','Documental','Action','Family','Romance'];

  constructor(private movieService: MovieService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addingForm = this.formBuilder.group({
      formMovieTitle: ['', Validators.required],
      formMovieDirector: ['', Validators.required],
      formMovieYear: ['', Validators.required],
      formMovieType: ['', Validators.required]
    });
    this.arrayYear = new Array();
    for (var i = 2020; i > 1900; i--) {
      this.arrayYear.push(i + 1)
    }
    this.arrayType.sort();
  }

  get f() { return this.addingForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.addingForm.invalid) {
      return;
    }
    let movie: Movie = new Movie(
      this.f.formMovieTitle.value,
      this.f.formMovieDirector.value, 
      this.f.formMovieYear.value, 
      this.f.formMovieType.value)
    this.movieService.addMovie(movie)
    .subscribe(
      movie => {this.movie = movie;}
    )
  }

}
