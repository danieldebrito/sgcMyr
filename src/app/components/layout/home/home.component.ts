import { Component, OnInit } from '@angular/core';
import { NavFooterService } from '../../../services/cambiaRouter/nav-footer.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(public navFootServ: NavFooterService ) { }

  ngOnInit() {
    this.navFootServ.show = true;
  }

}
