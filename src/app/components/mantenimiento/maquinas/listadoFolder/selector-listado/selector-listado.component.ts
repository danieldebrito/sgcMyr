import { Component, OnInit } from '@angular/core';
import { MaquinaService } from 'src/app/services/maquinas/maquina.service';
import { Maquina } from 'src/app/class/maquinas/maquina';

@Component({
  selector: 'app-selector-listado',
  templateUrl: './selector-listado.component.html',
  styleUrls: ['./selector-listado.component.css']
})
export class SelectorListadoComponent implements OnInit {

  public maquinasList: Maquina[];


  constructor(    private maquinaService: MaquinaService,
    ) { }

  cargarLista() {
    this.maquinaService.Listar().subscribe( response => {
      this.maquinasList = response;
    });
  }

  ngOnInit() {
  }

}
