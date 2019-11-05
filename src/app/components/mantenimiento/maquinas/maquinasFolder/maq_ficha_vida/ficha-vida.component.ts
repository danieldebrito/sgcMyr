import { Component, OnInit } from '@angular/core';
import { Maquina } from 'src/app/class/maquinas/maquina';
import { Especificacion } from 'src/app/class/maquinas/especificacion';
import { MaquinaService } from 'src/app/services/maquinas/maquina.service';
import { EspecificacionService } from 'src/app/services/maquinas/especificacion.service';
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';

@Component({
  selector: 'app-ficha-vida',
  templateUrl: './ficha-vida.component.html',
  styleUrls: ['./ficha-vida.component.css']
})
export class FichaVidaComponent implements OnInit {

  public maquina: Maquina;
  public especifList: Especificacion[];
  public mensaje;

  constructor(
    private maquinaService: MaquinaService,
    public navFootServ: NavFooterService,
    public EspecificacioService: EspecificacionService ) {
      // this.especificacion = new Especificacion('', '', '');
     }

  eliminar(id: string) {
    this.maquinaService.Eliminar(id).then( () => {
      // this.cargarLista();
    });
  }

  public traerUno() {
    this.maquinaService.MaquinaDetalle().subscribe(response => {
        this.maquina = response;
        this.cargarListaEspecificaciones();
    },
        error => {
            console.error(error);
        });
}

cargarListaEspecificaciones() {
  this.EspecificacioService.TraerTodosMaquina(this.maquina.idMaquina).subscribe(response => {
    this.especifList = response;
  });
}



  ngOnInit() {
    this.navFootServ.show = true;
    this.maquina = JSON.parse(localStorage.getItem('maquinaDetalle'));
    this.cargarListaEspecificaciones();
  }
}
