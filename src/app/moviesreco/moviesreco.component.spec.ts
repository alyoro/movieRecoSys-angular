import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesrecoComponent } from './moviesreco.component';

describe('MoviesrecoComponent', () => {
  let component: MoviesrecoComponent;
  let fixture: ComponentFixture<MoviesrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
