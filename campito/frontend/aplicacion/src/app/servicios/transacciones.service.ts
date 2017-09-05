import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers,RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransaccionesService {
   headers = new Headers({ 'Content-Type': 'application/json' });
   options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });

  private apiUrl: string = /*'https://pabloutn.000webhostapp.com/TP-labIV2017/campito/backend/ws/apirest/public/index.php/alquiler/'; */ 'http://pabloutn.esy.es/TP-labIV2017/campito/backend/ws/apirest/public/index.php/alquiler/';//'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/alquiler';
  private apiUrlComp: string = /*'https://pabloutn.000webhostapp.com/TP-labIV2017/campito/backend/ws/apirest/public/index.php/comprar/'; */ 'http://pabloutn.esy.es/TP-labIV2017/campito/backend/ws/apirest/public/index.php/comprar/';//'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/comprar';

  constructor(private http: Http) { }

  postAlquiler(entidad: Object): Observable<any>{
    let body = JSON.stringify(entidad);
    return this.http.post(this.apiUrl + 'agregar', body, this.options).map(this.getDatos).catch(this.error);
  }

  
  postCompra(entidad: Object): Observable<any>{
    let body = JSON.stringify(entidad);
    return this.http.post(this.apiUrlComp + 'agregar', body, this.options).map(this.getDatos).catch(this.error);
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
