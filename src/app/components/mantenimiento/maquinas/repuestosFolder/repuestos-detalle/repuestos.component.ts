import { Component, OnInit } from '@angular/core';
import { MaquinaRepuesto } from 'src/app/class/maquinas/maquinaRepuesto';
// services
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {

  public repuesto: MaquinaRepuesto;

  constructor(
    public navFootServ: NavFooterService ) {
      this.repuesto = JSON.parse(localStorage.getItem('repuestoDetalle'));
    }

  ngOnInit() {
    this.navFootServ.show = true;
    this.repuesto = JSON.parse(localStorage.getItem('repuestoDetalle'));
    this.navFootServ.show = true;
  }
}
