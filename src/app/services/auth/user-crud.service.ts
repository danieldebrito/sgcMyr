import { Injectable } from '@angular/core';
import { BaseUrlWebService } from '../_baseUrl_web.service';
import { User } from '../../class/auth/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCRUDService {

  constructor(public miHttp: BaseUrlWebService) { }

  public altaCliente(
    idUsuario: string,
    nombre: string,
    email: string,
    clave: string,
    estado: string,
    rol: string

  ): Promise<object> {

      const request: object = {
        idUsuario,
        nombre,
        email,
        clave,
        estado,
        rol
    };
      return this.miHttp.httpPostP('/user/', request);
  }

  public traerUno(id: string): Observable<User> {
    return this.miHttp.httpGetO<User>('/user/' + '"' + id + '"');
  }
}
