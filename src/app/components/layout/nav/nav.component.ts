import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public show: boolean;

  constructor( ) { }

  public mostrarNavFoot() {
    this.show = true;
    // this.showValue.emit({ show: this.navFootServ.show });  // true, muestra grilla, false, muestra detalle de art
  }

  ngOnInit() {
  }

}
