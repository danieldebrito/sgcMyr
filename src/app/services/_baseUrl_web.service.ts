import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlWebService {

  // localhost
  urlBaseWeb = 'http://localhost/api_myr_web/app';

  // ALLYTECH
  // urlBaseWeb = 'http://juntasmeyro.com.ar/API/api_meyro_web/app/index.php';

  // hostinguer
  // urlBaseWeb = 'https://meyro.000webhostapp.com/api/api_meyro_web/app';

  constructor( public http: HttpClient ) {
   }

  public httpGetP( url: string) {
    return this.http
    .get( this.urlBaseWeb + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpDeleteP( url: string) {
    return this.http
    .delete( this.urlBaseWeb + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, request: object) {
    return this.http.post( this.urlBaseWeb + url, request).toPromise();
  }

  public httpGetO<T>( url: string) {
    return this.http.get<T>( this.urlBaseWeb + url );
  }


  private extractData( res: Response ) {
    return res.json() || {};
  }

  private handleError( error: Response | any ) {
    return error;
  }
}
