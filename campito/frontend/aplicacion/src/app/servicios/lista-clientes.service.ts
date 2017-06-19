import { Injectable } from '@angular/core';
import {Http, Response, Request, Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import {Cliente} from '../clases/Cliente';

@Injectable()
export class ListaClientesService {
  
  private apiUrl: string = 'http://localhost:8080/TP-labIV2017/campito/backend/ws/vendor/slim/slim/clientes';
  
  constructor(private http: Http) { }


  getClientes(): Observable<Cliente[]>{
      return this.http.get(this.apiUrl).map(this.getDatos).catch(this.error);
  }

  getClienteCorreo(correo: string): Observable<Cliente>{
    //console.log('correo en lista-clientes.service.ts: ', correo); LLEGA OK
    return this.http.get(this.apiUrl + '/' + correo).map(this.getDatos).catch(this.error);
  }

  private postCliente(entidad: Cliente): Observable<Cliente>{
    return this.http.post(this.apiUrl, entidad).map(this.getDatos).catch(this.error);
  }

  private getDatos(data: Response){
    let datos = data.json();
    //console.log('Datos: ', datos); //DEVUELVE OK LA DATA
    return  datos || [];
  }

    
  private error(error: any){
    let msg = (error.message) ? error.message: 'Error desconocido';
    console.log(msg); 
    return Observable.throw(msg);
  }



  /*private getOptions(): RequestOptions{
    let auth = new Headers({ 'Authorization': 'Bearer' + localStorage.setItem('token') });
    let options = new RequestOptions({headers: auth});
    return options;
  }*/

}
