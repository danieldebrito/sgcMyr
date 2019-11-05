import { Injectable } from '@angular/core';
import { BaseUrlService } from '../_baseUrl_sgc.service';
import { Observable } from 'rxjs';
import { Maquina } from '../../class/maquinas/maquina';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  public maquinaDetalle: Maquina;
  public maquinasList: Maquina[];

  constructor(public miHttp: BaseUrlService) {
    this.maquinaDetalle = new Maquina('', '', '', '', '', '', '', '', '', '');
  }

  public Listar(): Observable<Maquina[]> {
    return this.miHttp.httpGetO<Maquina[]>('/maquinas/');
  }

  cargarLista() {
    this.Listar().subscribe( response => {
      this.maquinasList = response;
    });
  }

  public Eliminar(id: string): Promise<object> {
    return this.miHttp.httpDeleteP('/maquinas/' + id);
  }

  public MaquinaDetalle(): Observable<Maquina> {
    return this.miHttp.httpGetO<Maquina>('/maquinas/' + '"' + this.maquinaDetalle.idMaquina + '"');
  }

  public traerUna(id: string): Observable<Maquina> {
    return this.miHttp.httpGetO<Maquina>('/maquinas/' + '"' + id + '"');
  }

  public Alta(
    idMaquina: string,
    detalle: string,
    marca: string,
    sector: string,
    estado: string,
    urlImagen: string,
    fabricanteNombre: string,
    fabricanteDireccion: string,
    fabricanteTelefono: string,
    fabricanteContacto: string
    ): Promise<object> {
    const request: object = {
      idMaquina,
      detalle,
      marca,
      sector,
      estado,
      urlImagen,
      fabricanteNombre,
      fabricanteDireccion,
      fabricanteTelefono,
      fabricanteContacto
    };
    return this.miHttp.httpPostP('/maquinas/', request);
  }

  public Update(
    idMaquina: string,
    detalle: string,
    marca: string,
    sector: string,
    estado: string,
    urlImagen: string,
    fabricanteNombre: string,
    fabricanteDireccion: string,
    fabricanteTelefono: string,
    fabricanteContacto: string
    ): Promise<object> {
    const request: object = {
      idMaquina,
      detalle,
      marca,
      sector,
      estado,
      urlImagen,
      fabricanteNombre,
      fabricanteDireccion,
      fabricanteTelefono,
      fabricanteContacto
    };
    return this.miHttp.httpPostP('/maquinas/update', request);
  }
}
