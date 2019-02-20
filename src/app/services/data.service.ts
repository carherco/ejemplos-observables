import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private sd: SharedData
    private conf: ConfService) {

  }

  datos$: Subject = new Subject();



  setTipoVia(accion: string, params: any) {

    this.conf.setConfigGen(accion,params).subscribe(
      response => {
        this.sd.tiposVia = response.data.tiposVia;
        this.datos.next({tiposVia: sd.tiposVia});
      }
    );

  }

  loadTipoVia(accion: string, params: any) {
    this.conf.getConfigGen(accion,params).subscribe(
      response => {
        this.sd.tiposVia = response.data.tiposVia;
        this.datos.next(this.sd.tiposVia);
      }
    );
  }

  load(entidades) {



    for(entidad in entidades) {
      this.getConfigGen().subscribe(
        (response) => {
          if(reponse.error) {
            this.datos$.error('Error')
          }

          for(entidad in entidades) {
            if() {this.datos$.next({....})}
          }
        },
        (error) => {
          this.datos$.error(error)
        }
      );
    }
  }

}
