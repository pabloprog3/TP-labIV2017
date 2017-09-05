import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EstadisticasService {

  constructor(private http:Http) { }

  private apiUrl_alquiler: string = /*'https://pabloutn.000webhostapp.com/TP-labIV2017/campito/backend/ws/apirest/public/index.php/estadisticas/alquileres/';*/ 'http://pabloutn.esy.es/TP-labIV2017/campito/backend/ws/apirest/public/index.php/estadisticas/alquileres/';
  private apiUrl_venta: string = /*'https://pabloutn.000webhostapp.com/TP-labIV2017/campito/backend/ws/apirest/public/index.php/estadisticas/ventas/';*/ 'http://pabloutn.esy.es/TP-labIV2017/campito/backend/ws/apirest/public/index.php/estadisticas/ventas/';


   getAlquileresTotal(): Observable<any>{
      return this.http.get(this.apiUrl_alquiler).map(this.getDatos).catch(this.error);
  }

  getVentasTotal(): Observable<any>{
      return this.http.get(this.apiUrl_venta).map(this.getDatos).catch(this.error);
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
