export class Persona{

    public nombre:string;
    public apellido:string;
    public dni:string;
    public correo:string;
    public telefono:string;
    public passw:string;
    public fecha_nac:any;
    public categoria: string;
    //private categoria:string;


    constructor(_nombre: string, _apellido: string, _dni: string, _correo: string,
     _telefono: string, _passw: string, _fecha_nac: any, _categoria: string){        
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.dni = _dni;
        this.correo = _correo;
        this.telefono = _telefono;
        this.passw = _passw;
        this.fecha_nac = _fecha_nac;
        this.categoria = _categoria;
    }

    setNombre(valor: string){
        this.nombre = valor;
    }
    setApellido(valor: string){
        this.apellido = valor;
    }
    setDni(valor: string){
        this.dni = valor;
    }
    setCorreo(valor: string){
        this.correo = valor;
    }
    setTelefono(valor: string){
        this.telefono = valor;
    }
    setPassw(valor: string){
        this.passw = valor;
    }
    setFechaNacimiento(valor: string){
        this.fecha_nac = valor;
    }


    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getDni(){
        return this.dni;
    }
    getCorreo(){
        return this.correo;
    }
    getTelefono(){
        return this.telefono;
    }
    getPassw(){
        return this.passw;
    }
    getFechaNacimiento(){
        return this.fecha_nac;
    }
    getCategoria(){
        return this.categoria;
    }

}