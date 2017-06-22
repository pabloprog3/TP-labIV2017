import { Injectable } from "@angular/core";
import { tokenNotExpired } from "angular2-jwt";
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Usuario } from '../clases/Usuario';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class Auth{

    private url: string = 'http://localhost:8080/TP-labIV2017/campito/backend/ws/vendor/slim/slim/auth';
    
    constructor(private http: Http){
    }

    public  login(usuario: Usuario){
         let body = 'correo=' + usuario.correo + '&passw=' + usuario.passw;
         let headers = new Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
         let options = new RequestOptions({ 'headers': headers});

         return this.http.post(this.url, body, options).map(this.getDatos);//.catch(this.error);
    }

    public logout(){
        localStorage.removeItem('token');
    }


    private getDatos(data: Response){
        let datos=data.json();
        if (datos && datos.access_token) {
            localStorage.setItem('token', datos.access_token);
            return true;
        } else {
            return false;
        }
    }

    private error(error: any){
        let msg = (error.message) ? error.message : 'Error desconocido';
        console.error(msg);
        Observable.throw(msg);
    }



















}


