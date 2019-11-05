import { Injectable } from '@angular/core';
import { BaseUrlService } from '../_baseUrl_sgc.service';
import { Observable } from 'rxjs';
import { MaquinaRepuesto } from 'src/app/class/maquinas/maquinaRepuesto';

@Injectable({
  providedIn: 'root'
})
export class MaquinaRepuestosService {

  constructor(public miHttp: BaseUrlService) { }

  public Listar(): Observable<MaquinaRepuesto[]> {
    return this.miHttp.httpGetO<MaquinaRepuesto[]>('/maquinaRepuestos/');
  }
  public Baja(id: string): Promise<object> {
    return this.miHttp.httpDeleteP('/maquinaRepuestos/' + '"' + id + '"');
  }
  public TraerUno(id: string): Observable<MaquinaRepuesto> {
    return this.miHttp.httpGetO<MaquinaRepuesto>('/maquinaRepuestos/' + '"' + id + '"');
  }
  public Alta( detalle: string, marca: string, codigo: string ): Promise<object> {
      const request: object = {
        detalle,
        marca,
        codigo
    };
      return this.miHttp.httpPostP('/maquinaRepuestos/', request);
  }
  public Update( idRepuesto: string, detalle: string, marca: string, codigo: string ): Promise<object> {
      const request: object = {
        idRepuesto,
        detalle,
        marca,
        codigo
    };
      return this.miHttp.httpPostP('/maquinaRepuestos/update', request);
  }
}
