import { Component, OnInit, DoCheck } from '@angular/core';
import { NavFooterService } from '../../../services/cambiaRouter/nav-footer.service';

@Component({
  selector: 'app-layout-board',
  templateUrl: './layout-board.component.html',
  styleUrls: ['./layout-board.component.css']
})
export class LayoutBoardComponent implements OnInit, DoCheck {

  constructor(public navFootServ: NavFooterService ) { }

  public show: boolean;

  public mostrarNavFoot() {
    this.show = true;
    // this.showValue.emit({ show: this.navFootServ.show });  // true, muestra grilla, false, muestra detalle de art
  }

  ngOnInit() {
    this.show = this.navFootServ.show;
    // alert(this.navFootServ.show);
  }
  ngDoCheck(): void {
    this.show = this.navFootServ.show;
  }
}
