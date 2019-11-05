import { Component, OnInit } from '@angular/core';
import { MaquinaRepuesto } from 'src/app/class/maquinas/maquinaRepuesto';
import { Maquina } from 'src/app/class/maquinas/maquina';
import { Router } from '@angular/router';
// services
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { MaquinaRepuestosService } from 'src/app/services/maquinas/maquinaRepuestos.service';
import { MaqRtoService } from 'src/app/services/maquinas/maq-rto.service';



@Component({
  selector: 'app-repuesto-listado',
  templateUrl: './repuesto-listado.component.html',
  styleUrls: ['./repuesto-listado.component.css']
})
export class RepuestoListadoComponent implements OnInit {

  public repuestosList: any;
  public repuesto: MaquinaRepuesto;
  public maquina: Maquina;
  public show: boolean;  // true muestra nav y footer


  constructor(
    private repuestoService: MaquinaRepuestosService,
    private maqRtoService: MaqRtoService,
    public navFootServ: NavFooterService,
    private router: Router ) {
      this.repuestosList = [];
    }

  eliminar(id: string) {
    this.repuestoService.Baja(id).then( () => {
      this.cargarLista();
    });
  }

  cargarLista() {
    this.maqRtoService.ListarMaquina(this.maquina.idMaquina).subscribe( response => {
      this.repuestosList = response;
    });
  }

  public traerUno(id: string) {
    this.repuestoService.TraerUno(id).subscribe(response => {
        this.repuesto = response;
        localStorage.setItem('repuestoDetalle', JSON.stringify(this.repuesto));
        return response;
    },
        error => {
            console.error(error);
        });
}

mostrarDetalle(repuesto: MaquinaRepuesto) {
  // this.repuestoService.repuestoDetalle = repuesto;

  this.navFootServ.redirectURL = '/repuestoDetalle';
  this.router.navigate([this.navFootServ.redirectURL]);
  localStorage.setItem('repuestoDetalle', JSON.stringify(repuesto));
}

  ngOnInit() {
    this.maquina = JSON.parse(localStorage.getItem('maquinaDetalle'));
    this.cargarLista();
    this.navFootServ.show = true;
  }
}
