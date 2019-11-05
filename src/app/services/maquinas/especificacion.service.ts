import { Injectable } from '@angular/core';
import { BaseUrlService } from '../_baseUrl_sgc.service';
import { Observable } from 'rxjs';
import { Especificacion } from '../../class/maquinas/especificacion';

@Injectable({
  providedIn: 'root'
})
export class EspecificacionService {

  constructor(public miHttp: BaseUrlService) { }

  public Listar(): Observable<Especificacion[]> {
    return this.miHttp.httpGetO<Especificacion[]>('/especificaciones/');
  }

  public Baja(id: string): Promise<object> {
    return this.miHttp.httpDeleteP('/especificaciones/' + id);
  }

  public BajaTodosMaquina(id: string): Promise<object> {
    return this.miHttp.httpDeleteP('/especificaciones/maquinas/' + id);
  }

  public TraerUno(id: string): Observable<Especificacion> {
    return this.miHttp.httpGetO<Especificacion>('/especificaciones/' + '"' + id + '"');
  }

  public TraerTodosMaquina(id: string): Observable<Especificacion[]> {
    return this.miHttp.httpGetO<Especificacion[]>('/especificaciones/maquinas/' + '"' + id + '"');
  }

  public Alta( idMaquina: string, detalle: string ): Promise<object> {
      const request: object = {
        // idEspecificacion: idEspecificacion, AI
        idMaquina,
        detalle
    };
      return this.miHttp.httpPostP('/especificaciones/', request);
  }
}
