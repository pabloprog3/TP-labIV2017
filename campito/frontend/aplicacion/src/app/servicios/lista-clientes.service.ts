import { Injectable } from '@angular/core';
import {Http, Response, Request, Headers,RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import { Cliente } from '../clases/Cliente';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListaClientesService {
  
  private apiUrl: string = 'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/clientes';
  private cliente: Object;
  
  constructor(private http: Http) { }

   headers = new Headers({ 'Content-Type': 'application/json' });
   options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });

  getClientes(): Observable<Cliente[]>{
      return this.http.get(this.apiUrl).map(this.getDatos).catch(this.error);
  }

 /* getClienteCorreo(correo: string): Observable<Cliente>{
    //console.log('correo en lista-clientes.service.ts: ', correo); LLEGA OK
    return this.http.get(this.apiUrl + '/' + correo).map(this.getDatos).catch(this.error);
  } */

  getClienteCorreo(correo: string): Observable<Cliente>{
    //console.log('correo en lista-clientes.service.ts: ', correo);  //LLEGA OK
    return this.http.get(this.apiUrl + '/' + correo)
        .map(r => r.json())
        .catch(this.error);
    }

  postCliente(entidad: any): Observable<any>{
    let body = JSON.stringify(entidad);
    return this.http.post(this.apiUrl + '/agregar', body, this.options).map(this.getDatos).catch(this.error);
  }

  deleteCliente(entidad: Cliente){
    return this.http.delete(this.apiUrl + '/eliminar/' + entidad.correo).catch(this.error);
  }

  updateCliente(entidad: Cliente){
    let eJson = JSON.stringify(entidad);
    return this.http.put(this.apiUrl + '/actualizar/' + entidad.correo, entidad).catch(this.error);
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



  private getOptions(): RequestOptions{
    let auth = new Headers({ 'Authorization': 'Bearer' + localStorage.getItem('token') });
    let options = new RequestOptions({headers: auth});
    return options;
  }

}
