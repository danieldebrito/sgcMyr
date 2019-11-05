import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavFooterService {

  public show: boolean; // true, muestra footer y nav
  public redirectURL: string; // url direccionable
  public listado: boolean; // true, listado, true cards

  constructor() {
    this.show = false;
    this.redirectURL = '';
   }
}
