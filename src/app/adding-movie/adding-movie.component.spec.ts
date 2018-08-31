import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingMovieComponent } from './adding-movie.component';

describe('AddingMovieComponent', () => {
  let component: AddingMovieComponent;
  let fixture: ComponentFixture<AddingMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
