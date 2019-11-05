import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { CorrectivoService } from 'src/app/services/mantenimientos/correctivo.service';
// class
import { Correctivo } from 'src/app/class/maquinas/correctivo';
import { Maquina } from 'src/app/class/maquinas/maquina';



@Component({
  selector: 'app-correctivo-maq-listado',
  templateUrl: './correctivo-maq-listado.component.html',
  styleUrls: ['./correctivo-maq-listado.component.css']
})
export class CorrMLComponent implements OnInit {

  public correctivosList: any;
  public correctivo: Correctivo;
  public maquina: Maquina;
  public show: boolean;  // true muestra nav y footer

  constructor(
    private correctivoService: CorrectivoService,
    public navFootServ: NavFooterService,
    private router: Router ) {
      this.correctivosList = [];
    }

  eliminar(id: string) {
    this.correctivoService.Baja(id).then( () => {
      this.cargarLista();
    });
  }

  cargarLista() {
    this.correctivoService.ListarMaquina(this.maquina.idMaquina).subscribe( response => {
      this.correctivosList = response;
    });
  }

  public traerUno(id: string) {
    this.correctivoService.TraerUno(id).subscribe(response => {
        this.correctivo = response;
        localStorage.setItem('correctivoDetalle', JSON.stringify(this.correctivo));
        return response;
    },
        error => {
            console.error(error);
        });
}

mostrarDetalle(correctivo: Correctivo) {
  // this.repuestoService.repuestoDetalle = repuesto;

  this.navFootServ.redirectURL = '/correctivoDetalle';
  this.router.navigate([this.navFootServ.redirectURL]);
  localStorage.setItem('correctivoDetalle', JSON.stringify(correctivo));
}

  ngOnInit() {
    this.maquina = JSON.parse(localStorage.getItem('maquinaDetalle'));
    this.cargarLista();
    this.navFootServ.show = true;
  }
}
