
export class Usuario{
    
    nombre:string="";
    apellido:string="";
    correo:string="";
    rol:string="";

    constructor(_nombre:string, _apellido:string, _correo:string, _rol:string){
        this.nombre=_nombre;
        this.apellido=_apellido;
        this.correo=_correo;
        this.rol=_rol;
    }

}
