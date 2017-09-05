import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers,RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PropiedadService {

private apiUrl: string = /*'https://pabloutn.000webhostapp.com/TP-labIV2017/campito/backend/ws/apirest/public/index.php/propiedades/';*/ 'http://pabloutn.esy.es/TP-labIV2017/campito/backend/ws/apirest/public/index.php/propiedades/';//'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/propiedades';

   headers = new Headers({ 'Content-Type': 'application/json' });
   options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });

  constructor(private http: Http) { }


getPropiedades(): Observable<Object>{
      return this.http.get(this.apiUrl).map(this.getDatos).catch(this.error);
  }

getPropiedadId(id): Observable<Object>{
    return this.http.get(this.apiUrl + id).map(this.getDatos).catch(this.error);
    }

postPropiedad(propiedad): Observable<Object>{
  return this.http.post(this.apiUrl + 'agregar', propiedad, this.options).map(this.getDatos).catch(this.error);
}



private getDatos(data: Response){
    let datos = data.json();
    return  datos || [];
  }

    
  private error(error: any){
    let msg = (error.message) ? error.message: 'Error desconocido';
    console.log(msg); 
    return Observable.throw(msg);
  }



}
