import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe(
      data => console.log('En el componente:', data)
    );
    this.dataService.getEntidades(['users','todos','comments']);
  }

  ngOnInit() {
  }

}
