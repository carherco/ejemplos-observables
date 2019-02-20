import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  tiposVia: TipoVia[];
  seleccionado:

  constructor(private dataService: DataService) {
    this.loading = true;
    this.hashId = "asdfasdfasd";


    this.dataService.datos$.pipe(
      filter( datos => datos.hashid == this.hashId )
    )
    .subscribe(
      datos => {
        this.tiposVia = datos.tiposVia;
        this.paises = datos.paises;
        this.loading = false;
      }
      error => {

      }
    );
    this.dataService.load(['TipoVia', 'Paises']);

}
