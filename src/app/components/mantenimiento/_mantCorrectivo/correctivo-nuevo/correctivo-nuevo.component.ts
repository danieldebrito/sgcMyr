import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { CorrectivoService } from 'src/app/services/mantenimientos/correctivo.service';
// class
import { Correctivo } from 'src/app/class/maquinas/correctivo';

@Component({
  selector: 'app-correctivo-nuevo',
  templateUrl: './correctivo-nuevo.component.html',
  styleUrls: ['./correctivo-nuevo.component.css']
})
export class CorrectivoNuevoComponent implements OnInit {

  public correctivosList: any;
  public correctivo: Correctivo;
  public idAlta;
  public show: boolean;  // true muestra nav y footer

  constructor(
    private correctivoService: CorrectivoService,
    public navFootServ: NavFooterService,
    private router: Router ) {
      this.correctivosList = [];
    }

    public alta() {

      this.correctivoService.Alta(
        this.correctivo.idMaquina,
        this.correctivo.fechaSolicitud,
        this.correctivo.solicitante,
        this.correctivo.fechaReparacion,
        this.correctivo.mantRealizar,
        this.correctivo.realizadoPor,
        this.correctivo.fechaReparado,
        this.correctivo.horaReparado,
        this.correctivo.mantRealizado
        ).then(
          response => {
            this.idAlta = response;
            this.navFootServ.redirectURL = '/maquinaCorrectivo';
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
      this.correctivo.idMantCorrect = '';
      this.correctivo.idMaquina = '';
      this.correctivo.fechaSolicitud = new Date();
      this.correctivo.solicitante = '';
      this.correctivo.fechaReparacion = new Date();
      this.correctivo.mantRealizar = '';
      this.correctivo.fechaRealizacion = new Date();
      this.correctivo.realizadoPor = '';
      this.correctivo.fechaReparado = new Date();
      this.correctivo.horaReparado = new Date();
      this.correctivo.mantRealizado = '';
    }

  ngOnInit() {
    this.correctivo = JSON.parse(localStorage.getItem('maquinaDetalle'));
    this.navFootServ.show = true;
  }
}
