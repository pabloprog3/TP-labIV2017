import {Persona} from './PersonaBase';

export class Empleado extends Persona{
    private id_sucursal:number;
    private foto:string;
    private sueldo:number;
    private tipo_empleado:string;

    constructor(_nombre:string, _apellido:string, _dni:string, _correo:string, _telefono:string, _passw:string, _fecha_nac:any,
                _id_sucursal:number, _foto:string, _sueldo:number, _tipo_empleado:string){
        
        super(_nombre, _apellido, _dni, _correo, _telefono, _passw, _fecha_nac);
        
        this.id_sucursal = _id_sucursal;
        this.foto=_foto;
        this.sueldo=_sueldo;
        this.tipo_empleado=_tipo_empleado;
    }


}