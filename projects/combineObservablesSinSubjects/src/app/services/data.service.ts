import { Injectable } from '@angular/core';
import { Observable, zip, Subject, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SD } from '../data/shared-data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getEntidades(entidades: string[]) {

    let arrayObservables = [];
    let obs = null;

    for(let entidad of entidades ){
      if(false) { // Si ya lo tengo
        obs = of( SD.paises )
      } else { // Si no lo tengo
        obs = this.http.get(this.url + '/' + entidad);
      }
      arrayObservables.push( obs );
    }

    return zip( ...arrayObservables );
  }
}
