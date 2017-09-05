import { Injectable } from '@angular/core';
import {Http, Response, Request, Headers,RequestOptions, RequestOptionsArgs, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Empleado } from '../clases/Empleado';

@Injectable()
export class EmpleadosService {

  private apiUrl: string = /*'https://pabloutn.000webhostapp.com/TP-labIV2017/campito/backend/ws/apirest/public/index.php/empleados/';*/ 'http://pabloutn.esy.es/TP-labIV2017/campito/backend/ws/apirest/public/index.php/empleados/'; //'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/empleados/';
  private cliente: Object;

  constructor(private http: Http) { }

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });

  getEmpleados(): Observable<any[]>{
      return this.http.get(this.apiUrl).map(this.getDatos).catch(this.error);
  }


  getEmpleadoCorreo(correo: string): Observable<any>{
    return this.http.get(this.apiUrl + correo)
        .map(r => r.json())
        .catch(this.error);
    }

  postEmpleado(entidad: any, params:string[], file:FileList): Observable<any>{
    /*return Observable.create(observer => {
        let formData:FormData = new FormData(),
        xhr:XMLHttpRequest = new XMLHttpRequest();
        formData.append('form', entidad);
        formData.append('file', file);

        xhr.open('POST', this.apiUrl + 'agregar', true);
        xhr.send(formData);*/
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions( {method: RequestMethod.Post, headers: this.headers });

    //let formData = new FormData();
    //xhr: XMLHttpRequest = new XMLHttpRequest();
    
     //JSON.stringify(entidad)
    return this.http.post(this.apiUrl + 'agregar', entidad, options).map(response => response.text()).catch(this.error);
   
}

  deleteEmpleado(entidad: Empleado){
    return this.http.delete(this.apiUrl + 'eliminar/' + entidad.correo).catch(this.error);
  }

  updateEmpleado(entidad: Empleado){
    let eJson = JSON.stringify(entidad);
    return this.http.put(this.apiUrl + 'actualizar/' + entidad.correo, entidad)
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

  

}
