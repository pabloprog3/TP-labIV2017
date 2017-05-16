import {Persona} from './PersonaBase';

export class Cliente extends Persona{
    
    constructor(_nombre:string, _apellido:string, _dni:string, _correo:string, _telefono:string, _passw:string, _fecha_nac:any){
        super(_nombre, _apellido, _dni, _correo, _telefono, _passw, _fecha_nac);
    }

}