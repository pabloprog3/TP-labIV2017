import {Persona} from './PersonaBase';

export class Cliente extends Persona{

    public nombre:string;
    public apellido:string;
    public dni:string;
    public correo:string;
    public telefono:string;
    public passw:string;
    public fecha_nac:any;
    public categoria: string;
    
    constructor(_nombre:string, _apellido:string, _dni:string, _correo:string, _telefono:string, _passw:string, _fecha_nac:any, _categoria: string){
        super(_nombre, _apellido, _dni, _correo, _telefono, _passw, _fecha_nac, _categoria);
    }

}