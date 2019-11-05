import { Component, OnInit, Input } from '@angular/core';
import { Maquina } from 'src/app/class/maquinas/maquina';
import { MaquinaService } from 'src/app/services/maquinas/maquina.service';
import { EspecificacionService } from 'src/app/services/maquinas/especificacion.service';
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() maquinasList: Maquina[];

  public show: boolean;  // true muestra nav y footer

  constructor(
    private maquinaService: MaquinaService,
    public navFootServ: NavFooterService,
    public EspecifService: EspecificacionService,
    private router: Router) { }

  eliminar(id: string) {
    if (confirm('¿Seguro que desea eliminar?')) {
      this.maquinaService.Eliminar(id).then(() => {
        this.cargarLista();
        console.log('id a borrar:' + id);
      });

      this.EspecifService.BajaTodosMaquina(id).then();
    }
  }

  cargarLista() {
    this.maquinaService.Listar().subscribe(response => {
      this.maquinasList = response;
    });
  }

  mostrarDetalle(maquina: Maquina) {
    this.maquinaService.maquinaDetalle = maquina;
    this.navFootServ.redirectURL = '/maquina';
    this.router.navigate([this.navFootServ.redirectURL]);
    localStorage.setItem('maquinaDetalle', JSON.stringify(maquina));
  }

  ngOnInit() {
    this.cargarLista();
    this.navFootServ.show = true;
  }
}
