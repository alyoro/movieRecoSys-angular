import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { accessSync } from 'fs';
import { async } from 'rxjs/internal/scheduler/async';

describe('MovieService', () => {
  let service: MovieService;
  let httpClient: {get: jasmine.Spy};
  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MovieService(<any> httpClient);
  });


  it('should return expected movies (HttpClient called one)', () =>{
    const expectedMovies: Movie[] = [
        { "id": 2, "title": "The Shawshank Redemption", "director": "Frank Darabont", "year": "1995", "type": "Drama", "avgScore": 7.8, "yourScore":8},
        { "id": 3, "title": "test", "director": "test", "year": "2000", "type": "Drama", "avgScore": 8,"yourScore":9}
    ];

    httpClient.get.and.returnValue((expectedMovies));

    service.getMovies().subscribe(
      movies => expect(movies).toEqual(expectedMovies, 'expected movies'),
      fail
    );
    expect(httpClient.get.calls.count()).toBe(1, 'one call');
  })

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));




});
