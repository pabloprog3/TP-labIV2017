import { Injectable } from '@angular/core';
import {Http, Response, Request, Headers,RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Empleado } from '../clases/Empleado';

@Injectable()
export class EmpleadosService {

  private apiUrl: string = 'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/empleados';
  private cliente: Object;

  constructor(private http: Http) { }

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });

  getEmpleados(): Observable<any[]>{
      return this.http.get(this.apiUrl).map(this.getDatos).catch(this.error);
  }


  getEmpleadoCorreo(correo: string): Observable<any>{
    return this.http.get(this.apiUrl + '/' + correo)
        .map(r => r.json())
        .catch(this.error);
    }

  postEmpleado(entidad: any): Observable<any>{
    return this.http.post(this.apiUrl + '/agregar', JSON.stringify(entidad), this.options).map(this.getDatos).catch(this.error);
  }

  deleteEmpleado(entidad: any){
    return this.http.delete(this.apiUrl + '/eliminar/' + entidad.correo).catch(this.error);
  }

  updateEmpleado(entidad: any){
    let eJson = JSON.stringify(entidad);
    return this.http.put(this.apiUrl + '/actualizar/' + entidad.correo, eJson)
          .map(result => result.json())
          .catch(this.error);
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