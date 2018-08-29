import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



import { Movie } from '../movie';
import { environment } from '../../environments/environment';



@Injectable({ providedIn: 'root' })
export class MovieService {

  private actionUrl: string;

  constructor(
    private http: HttpClient) {
      this.actionUrl = environment.apiUrl + 'movies/';
    }
    

  public getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.actionUrl + 'top')
    .pipe(
      tap(movies => this.log('fetched movies')),
      catchError(this.handleError('getMovies', []))
    );
    
    
  }

  public searchMovie(title: string): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.actionUrl + 'search/title?title='+ title)
    .pipe(
      tap(movies => this.log('search Movie')),
      catchError(this.handleError('searchMovie', []))
    );
}
  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a MovieService */
  private log(message: string) {
    console.log(message);
  }


}

