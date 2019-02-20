import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { zip, combineLatest } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  users = [];
  todos = [];
  comments = [];
  loading = false;
  selectedPais= "";

  constructor(private dataService: DataService) {

    this.loading = true;

    let observableConjunto$ = zip(
      this.dataService.users$,
      this.dataService.todos$,
      this.dataService.comments$,
    );

    // let observableConjunto$ = combineLatest(
    //   this.dataService.users$,
    //   this.dataService.todos$,
    //   this.dataService.comments$,
    // );

    observableConjunto$.subscribe(
      zipdata => {
        console.log('Al componente le ha llegado: ', zipdata);
        this.users = zipdata[0];
        this.todos = zipdata[1];
        this.comments = zipdata[2];
        this.loading = false;
      }
    );

    this.dataService.getEntidades(['users','todos','comments']);
  }

  ngOnInit() {
  }

}
