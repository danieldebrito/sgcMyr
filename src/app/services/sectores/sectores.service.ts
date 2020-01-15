import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/services/_baseUrl_sgc.service';
import { Observable } from 'rxjs';
import { Sector } from 'src/app/class/sector/sector';

@Injectable({
  providedIn: 'root'
})
export class SectoresService {
  constructor(public miHttp: BaseUrlService) { }

  public Listar(): Observable<Sector[]> {
    return this.miHttp.httpGetO<Sector[]>('/sectores/');
  }

  public Baja(id: string): Promise<object> {
    return this.miHttp.httpDeleteP('/sectores/' + id);
  }

  public TraerUno(id: string): Observable<Sector> {
    return this.miHttp.httpGetO<Sector>('/sectores/' + id);
  }

  public TraerUnoSector(sector: string): Observable<Sector> {
    return this.miHttp.httpGetO<Sector>('/sectores/sector/' + '"' + sector + '"');
  }

  public Alta( sector: string ): Promise<object> {
      const request: object = {
        sector
    };
      return this.miHttp.httpPostP('/sectores/', request);
  }

  public Update( idSector: string,  sector: string ): Promise<object> {
      const request: object = {
        idSector,
        sector
    };
      return this.miHttp.httpPostP('/sectores/update', request);
  }

}
