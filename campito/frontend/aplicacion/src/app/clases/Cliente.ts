import {Persona} from './PersonaBase';

export class Cliente{

   /* public nombre:string;
    public apellido:string;
    public dni:string;
    public correo:string;
    public telefono:string;
    public passw:string;
    public fecha_nac:any;
    public categoria: string;

    //Datos de la propiedad
    public sucursal: string;
    public tipo_propiedad: string;
    public piso: number;
    public num_dpto: string;
    public provincia: string;
    public localidad: string;
    public disp_alquiler: string;
    public disp_venta: string;
    public dias: number;
    public precio_venta: number;
    public precio_alquiler: number;
*/
    constructor(
            public nombre:string,
            public apellido:string,
            public dni:string,
            public correo:string,
            public telefono:string,
            public passw:string,
            public fecha_nac:any,
            public categoria: string,
            public sucursal?: string,
            public tipo_propiedad?: string,
            public piso?: number,
            public num_dpto?: string,
            public provincia?: string,
            public localidad?: string,
            public disp_alquiler?: string,
            public disp_venta?: string,
            public dias?: number,
            public precio_venta?: number,
            public precio_alquiler?: number

    ){
        this.nombre="";
        this.apellido="";
        this.dni="";
        this.correo="";
        this.telefono="";
        this.passw="";
        this.fecha_nac="";
        this.categoria="";

        this.sucursal="";
        this.tipo_propiedad="";
        this.piso=0;
        this.num_dpto="";
        this.provincia="";
        this.localidad="";
        this.disp_alquiler="";
        this.disp_venta="";
        this.dias=0;
        this.precio_venta=0;
        this.precio_alquiler=0;
    }

}