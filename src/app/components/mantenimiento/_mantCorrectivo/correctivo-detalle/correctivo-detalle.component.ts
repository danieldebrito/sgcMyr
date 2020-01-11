import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { CorrectivoService } from 'src/app/services/mantenimientos/correctivo.service';
// class
import { Correctivo } from 'src/app/class/maquinas/correctivo';

@Component({
  selector: 'app-correctivo-detalle',
  templateUrl: './correctivo-detalle.component.html',
  styleUrls: ['./correctivo-detalle.component.css']
})
export class CorrectivoDetalleComponent implements OnInit {

  public correctivo: Correctivo;


  constructor(public navFootServ: NavFooterService) { }

  ngOnInit() {
    this.correctivo = JSON.parse(localStorage.getItem('correctivoDetalle'));
    this.navFootServ.show = true;
  }

}
