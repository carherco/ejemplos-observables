import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {

  tiposVia: TiposVia[];

  constructor(private dataService: DataService) {

    this.dataService.datos$.subscribe(
      datos => {
        this.provincias = datos.provincias;
        this.paises = datos.paises;
      }
    );
    this.dataService.load(['Provincias', 'Paises' ]);
  }

}
