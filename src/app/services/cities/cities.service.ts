import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  // id : number = 1;
  // name : string = "Carcassonne";
  // address : string = "302 rue lamark <br />11000 Carcassonne";
  // contactMessage : string = "Lien du contacter = <a href='#'>contact<a/>";
  // products: string[];
  
  private citiesUrl = 'http://localhost:8000/api/cities';

  private city: object;
  // private city: City[];

  
  constructor(
    private http: HttpClient
  ) {
    // this.city = this.findOneCity(1);


  }

  getCity(id: number){
    this.findOneCity(id)
      .subscribe(city => {
        this.city = city
        console.log(this.city) 
      });
      return this.city;
  
  }

  findOneCity(id: number): Observable<object> {

    const url = `${this.citiesUrl}/${id}`;

    return this.http.get<object>(url)
      .pipe(
        tap(city => {
          // console.log(city)
        }),
      catchError(this.handleError('findOneCity', []))
      )
      ;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
