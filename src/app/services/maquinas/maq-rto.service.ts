import { Injectable } from '@angular/core';
import { BaseUrlService } from '../_baseUrl_sgc.service';
import { Observable } from 'rxjs';
import { MaqRto } from 'src/app/class/maquinas/maqRto';

@Injectable({
  providedIn: 'root'
})
export class MaqRtoService {
  constructor(public miHttp: BaseUrlService) { }

  public Listar(): Observable<MaqRto[]> {
    return this.miHttp.httpGetO<MaqRto[]>('/MaqRto/');
  }

  public ListarMaquina(id: string): Observable<MaqRto[]> {
    return this.miHttp.httpGetO<MaqRto[]>('/MaqRto/maquina/' + '"' + id + '"');
  }

  public Baja(id: string): Promise<object> {
    return this.miHttp.httpDeleteP('/MaqRto/' + id);
  }

  public TraerUno(id: string): Observable<MaqRto> {
    return this.miHttp.httpGetO<MaqRto>('/MaqRto/' + '"' + id + '"');
  }

  public Alta( idMaquina: string, idRepuesto: string ): Promise<object> {
      const request: object = {
        idMaquina,
        idRepuesto
    };
      return this.miHttp.httpPostP('/MaqRto/', request);
  }

  public Update( idMaqRep: string,  idMaquina: string, idRepuesto: string ): Promise<object> {
      const request: object = {
        idMaqRep,
        idMaquina,
        idRepuesto
    };
      return this.miHttp.httpPostP('/MaqRto/update', request);
  }
}
