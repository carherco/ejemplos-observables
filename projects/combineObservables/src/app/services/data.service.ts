import { Injectable } from '@angular/core';
import { Observable, zip, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SD } from '../data/shared-data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://jsonplaceholder.typicode.com';
  data$: Subject<any> = new Subject();

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

    let observableConjunto$ = zip( ...arrayObservables );



    observableConjunto$.subscribe(
      zipdata => {
        console.log('En el zip:', zipdata);
        let datosFormateados = {}
        for (let i = 0; i < entidades.length; i++) {
          datosFormateados[entidades[i]] = zipdata[i];
        }
        this.data$.next(datosFormateados);
      }
    );


  }
}
