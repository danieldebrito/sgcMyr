import { Component, OnInit } from '@angular/core';
import { Maquina } from 'src/app/class/maquinas/maquina';
import { MaquinaService } from 'src/app/services/maquinas/maquina.service';
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maquina-buscar',
  templateUrl: './maquina-buscar.component.html',
  styleUrls: ['./maquina-buscar.component.css']
})
export class MaquinaBuscarComponent implements OnInit {

  public idMaquina = '';

  constructor(
    private maquinaService: MaquinaService,
    public navFootServ: NavFooterService,
    private router: Router) { }

  mostrarDetalle(maquina: Maquina) {
    this.maquinaService.maquinaDetalle = maquina;
    // console.log(this.MaquinaService.maquinaDetalle);
    this.navFootServ.redirectURL = '/maquina';
    this.router.navigate([this.navFootServ.redirectURL]);
    localStorage.setItem('maquinaDetalle', JSON.stringify(maquina));
  }

  onSubmit() {
    this.maquinaService.traerUna(this.idMaquina).subscribe(response => {

      this.maquinaService.maquinaDetalle = response;
      localStorage.setItem('maquinaDetalle', JSON.stringify(response));
      this.navFootServ.redirectURL = '/maquina';
      this.router.navigate([this.navFootServ.redirectURL]);
    },
      error => {
        console.error(error);
      });
  }

  ngOnInit() {
  }

}
