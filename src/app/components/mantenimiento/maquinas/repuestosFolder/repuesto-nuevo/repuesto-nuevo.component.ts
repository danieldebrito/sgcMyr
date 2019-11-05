import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// entidades
import { MaquinaRepuesto } from 'src/app/class/maquinas/maquinaRepuesto';
import { Maquina } from 'src/app/class/maquinas/maquina';
// services
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { MaquinaRepuestosService } from 'src/app/services/maquinas/maquinaRepuestos.service';
import { MaqRtoService } from 'src/app/services/maquinas/maq-rto.service';

@Component({
  selector: 'app-repuesto-nuevo',
  templateUrl: './repuesto-nuevo.component.html',
  styleUrls: ['./repuesto-nuevo.component.css']
})
export class RepuestoNuevoComponent implements OnInit {

  repuestosList;
  repuesto: MaquinaRepuesto;
  idrepuestoAlta: any;
  maqRto: any;

  public maquina: Maquina;
  public show: boolean;  // true muestra nav y footer
  public mensaje: string;

  constructor(
    private repuestoService: MaquinaRepuestosService,
    private maqRtoService: MaqRtoService,
    public navFootServ: NavFooterService,
    private router: Router) {
    this.repuestosList = [];
    this.repuesto = new MaquinaRepuesto('', '', '', '');
  }

  eliminar(id: string) {
    this.repuestoService.Baja(id).then(() => {
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
      return response;
    },
      error => {
        console.error(error);
      });
  }

  public altaMaqRto() {
    this.maquina = JSON.parse(localStorage.getItem('maquinaDetalle'));

    this.maqRtoService.Alta(this.maquina.idMaquina, this.idrepuestoAlta).then(
        response => {
          return response;
        }
      )
      .catch(
        error => {
          console.error('ERROR DEL SERVIDOR', error);
        }
      );
  }

  public alta() {
    this.maquina = JSON.parse(localStorage.getItem('maquinaDetalle'));

    this.repuestoService.Alta(
      // this.repuesto.idRepuesto, AI
      this.repuesto.detalle,
      this.repuesto.marca,
      this.repuesto.codigo)
      .then(
        response => {
          this.idrepuestoAlta = response;
          this.altaMaqRto();
          this.navFootServ.redirectURL = '/repuesto';
          this.router.navigate([this.navFootServ.redirectURL]);
          this.limpiar();
        }
      )
      .catch(
        error => {
          console.error('ERROR DEL SERVIDOR', error);
        }
      );
  }

  public limpiar() {
    this.repuesto.detalle = '';
    this.repuesto.marca = '';
    this.repuesto.codigo = '';
  }

  ngOnInit() {
    this.maquina = JSON.parse(localStorage.getItem('maquinaDetalle'));
    this.cargarLista();
    this.navFootServ.show = true;
  }
}
