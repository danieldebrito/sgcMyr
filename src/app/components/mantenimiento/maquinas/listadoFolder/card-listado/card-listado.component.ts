import { Component, OnInit } from '@angular/core';
import { Maquina } from 'src/app/class/maquinas/maquina';
import { MaquinaService } from 'src/app/services/maquinas/maquina.service';
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-listado',
  templateUrl: './card-listado.component.html',
  styleUrls: ['./card-listado.component.css']
})
export class CardListadoComponent implements OnInit {

  maquinasList: Maquina[];
  public show: boolean;  // true muestra nav y footer


  constructor(
    private maquinaService: MaquinaService,
    public navFootServ: NavFooterService,
    private router: Router ) { }

  eliminar(id: string) {
    this.maquinaService.Eliminar(id).then( () => {
      this.cargarLista();
      this.router.navigate(['home']);  //  redirecciona a HOME
      console.log('id a borrar:' + id);
    });
  }

  cargarLista() {
    this.maquinaService.Listar().subscribe( response => {
      this.maquinasList = response;
    });
  }

  mostrarDetalle(maquina: Maquina) {
    this.maquinaService.maquinaDetalle = maquina;
    console.log(this.maquinaService.maquinaDetalle);
    this.navFootServ.redirectURL = '/maquina';
    this.router.navigate([this.navFootServ.redirectURL]);
    localStorage.setItem('maquinaDetalle', JSON.stringify(maquina));
  }


  ngOnInit() {
    this.cargarLista();
    this.navFootServ.show = true;
  }
}
