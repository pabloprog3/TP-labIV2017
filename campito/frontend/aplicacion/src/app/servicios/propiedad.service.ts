import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PropiedadService {

private apiUrl: string = 'http://localhost:8080/TP-labIV2017/campito/backend/ws/apirest/public/index.php/propiedades';

  constructor(private http: Http) { }


getPropiedades(): Observable<Object>{
      return this.http.get(this.apiUrl).map(this.getDatos).catch(this.error);
  }

getPropiedadId(id): Observable<Object>{
    return this.http.get(this.apiUrl + '/' + id).map(this.getDatos).catch(this.error);
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
