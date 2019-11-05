import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

    // local host
    urlBase = 'http://localhost/api_myr_sgc/app';

    // urlBase = 'https://meyro.000webhostapp.com/api/api_meyro_sgc/app/index.php';

    // allytech
    // urlBase = 'http://juntasmeyro.com.ar/API/api_meyro_sgc/app/index.php';

  constructor( public http: HttpClient ) {
   }

  public httpGetP( url: string) {
    return this.http
    .get( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpDeleteP( url: string) {
    return this.http
    .delete( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, request: object) {
    return this.http.post( this.urlBase + url, request).toPromise();
  }

  public httpGetO<T>( url: string) {
    return this.http.get<T>( this.urlBase + url );
  }


  private extractData( res: Response ) {
    return res.json() || {};
  }

  private handleError( error: Response | any ) {
    return error;
  }
}
