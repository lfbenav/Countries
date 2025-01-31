import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countries.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private saveLocalStorage( term: string ): void {
    const url = this.router.url;
    sessionStorage.setItem('lastSearch', JSON.stringify([term, url]))
  }

  searchCountry( term: string ): Observable<Country[]> {
    this.saveLocalStorage(term);
    const url = `${environment.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchCapital( term: string ): Observable<Country[]> {
    this.saveLocalStorage(term);
    const url = `${environment.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchRegion( term: string ): Observable<Country[]> {
    this.saveLocalStorage(term);
    const url = `${environment.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchLanguage( term: string ): Observable<Country[]> {
    this.saveLocalStorage(term);
    const url = `${environment.apiUrl}/lang/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchCode( code: string ): Observable<Country | null> {
    const url = `${environment.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of(null) )
      );
  }
}
