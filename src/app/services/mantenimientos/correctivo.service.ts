import { Injectable } from '@angular/core';
import { BaseUrlService } from '../_baseUrl_sgc.service';
import { Observable } from 'rxjs';
import { Correctivo } from 'src/app/class/maquinas/correctivo';

@Injectable({
  providedIn: 'root'
})
export class CorrectivoService {


  constructor(public miHttp: BaseUrlService) { }

  public Listar(): Observable<Correctivo[]> {
    return this.miHttp.httpGetO<Correctivo[]>('/correctivos/');
  }
  public ListarMaquina(id: string): Observable<Correctivo[]> {
    return this.miHttp.httpGetO<Correctivo[]>('/correctivos/maquina/' + '"' + id + '"');
  }

  public Baja(id: string): Promise<object> {
    return this.miHttp.httpDeleteP('/correctivos/' + '"' + id + '"');
  }
  public TraerUno(id: string): Observable<Correctivo> {
    return this.miHttp.httpGetO<Correctivo>('/correctivos/' + '"' + id + '"');
  }

  public Alta(
    idMaquina: string,
    fechaSolicitud: Date,
    solicitante: string,
    fechaReparacion: Date,
    mantRealizar: string,
    realizadoPor: string,
    fechaReparado: Date,
    horaReparado: Date,
    mantRealizado: string
    ): Promise<object> {
      const request: object = {
        idMaquina,
        fechaSolicitud,
        solicitante,
        fechaReparacion,
        mantRealizar,
        realizadoPor,
        fechaReparado,
        horaReparado,
        mantRealizado
      };
      return this.miHttp.httpPostP('/correctivos/', request);
  }

  public Update(
    idMantCorrect: string,
    idMaquina: string,
    fechaSolicitud: string,
    solicitante: string,
    fechaReparacion: string,
    mantRealizar: string,
    realizadoPor: string,
    fechaReparado: string,
    horaReparado: string,
    mantRealizado: string
    ): Promise<object> {
      const request: object = {
        idMantCorrect,
        idMaquina,
        fechaSolicitud,
        solicitante,
        fechaReparacion,
        mantRealizar,
        realizadoPor,
        fechaReparado,
        horaReparado,
        mantRealizado
    };
      return this.miHttp.httpPostP('/correctivos/update', request);
  }
}
