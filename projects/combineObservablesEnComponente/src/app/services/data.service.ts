import { Injectable } from '@angular/core';
import { Observable, zip, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SD } from '../data/shared-data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://jsonplaceholder.typicode.com';
  // data$: Subject<any> = new Subject();
  users$: Subject<any> = new Subject();
  todos$: Subject<any> = new Subject();
  comments$: Subject<any> = new Subject();

  constructor(private http: HttpClient) {

  }

  getEntidades(entidades: string[]) {

    for(let entidad of entidades ){
      let obs$ = null;

      if(false) { // Si ya lo tengo
        obs$ = of( SD[entidad] )
      } else { // Si no lo tengo
        obs$ = this.http.get(this.url + '/' + entidad).pipe(
          tap( data => SD[entidad] = data )
        );
      }

      obs$.subscribe( data => {
        console.log('El subject '+ entidad+'$ va a hacer next() con los datos ', SD[entidad] );
        this[entidad+'$'].next(SD[entidad]);
      });
    } // for(let entidad of entidades )

  }
}
