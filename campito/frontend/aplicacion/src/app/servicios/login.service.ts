import { Injectable } from '@angular/core';
import {Http, Response, Request, Headers,RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import { Usuario } from '../clases/Usuario';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  private apiUrl: string = /*'https://pabloutn.000webhostapp.com/TP-labIV2017/campito/backend/ws/apirest/public/index.php/auth';*/ 'http://pabloutn.esy.es/TP-labIV2017/campito/backend/ws/apirest/public/index.php/auth';//'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/auth'; //

   headers = new Headers({ 'Content-Type': 'application/json' });
   options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });

  postUser(user: Usuario): Observable<any>{

      return this.http.post(this.apiUrl, JSON.stringify(user), this.options).map(this.getDatos).catch(this.error);
  }


  private getDatos(data: Response){
    let datos = data.json();
    return  datos || [];
  }

    
  private error(error: any){
    let msg = (error.message) ? error.message: 'Error desconocido';
    return Observable.throw(msg);
  }


}
