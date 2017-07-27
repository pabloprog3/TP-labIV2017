import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { EstadisticasService } from '../../servicios/estadisticas.service';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  listaAlquileres: Array<any>;//obtiene la data traida desde la BD

  listaVentas: Array<any>;//obtiene la data traida desde la BD
  aniosAlquileresFiltrados: any[] = new Array<any>();//anios registrados de  sin repetir
  aniosVentasFiltrados: any[] = new Array<any>();
  mesesAlquileresFiltrados: any[] = new Array<any>();
  
  ocultarCkbox: boolean;
  anio: string=''; //es el año por el cual filtro
  mes: string=''; //es el mes por el cual filtro
  categoria: string='alquileres';

  meses:string[]; //almacenara los meses que necesito filtrar

  constructor(private location: Location, private servicio: EstadisticasService) {
    this.servicio.getAlquileresTotal().subscribe(data => { 
      this.listaAlquileres = data;
      this.filtrarAniosAlquileres();
      this.filtrarMesesAlquileres();
      //this.dibujarGrafica('alquileres', '2016', 'Noviembre');
    });

    this.servicio.getVentasTotal().subscribe(data => { 
      this.listaVentas= data;
      this.filtrarAniosVentas();
      //this.dibujarGrafica('alquileres', '2016', 'Noviembre');
    });
  
   }

  ngOnInit() {
    this.ocultarCkbox = true;
  }

  volver(){

    //this.extraerData('alquileres', '2016', 'Abril','Noviembre'); Funciona OK
    this.location.back();

  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [42980, 0], label: 'Sucursal Ramos Mejía'},
    {data: [15000, 52360], label: 'Sucursal Capital Federal'},
    {data: [0, 1018250], label: 'Sucursal Turdera'}
  ];
  public lineChartLabels:Array<any> = ['Junio', 'Julio'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
 
  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }
 
  public chartHovered(e:any):void {
    //console.log(e);
  }




  //BARCHART

   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [ 
    {data: [0, 1504.3], label: 'Sucursal Ramos Mejía'},
    {data: [0, 2357.6], label: 'Sucursal Capital Federal'},
    {data: [0, 37143.75], label: 'Sucursal Turdera'}
    ]; 


private extraerData(categoria: string, anio?:string, ...meses:string[]) {
  let data: Object[];
  let sumComisionRM:number = 0;
  let sumComisionCF:number = 0;
  let sumComisionTUR:number = 0;
  
  
  //let mesesAnalitics = meses;
 
  switch (categoria) {
    case 'alquileres':
                      this.barChartLabels.push(anio);
                      let flag:boolean = false;
                      let arrayIdx: Array<number> = new Array<number>();
                      let strMont: string='';                
                          if(this.listaAlquileres != undefined){
                            for (var i = 0; i < this.listaAlquileres.length; i++) {
                                let strYear: string = this.listaAlquileres[i]['fecha'];
                                strYear = strYear.substr(0,4);
                                if (strYear == anio) {
                                  let  strMonth:string = this.listaAlquileres[i]['fecha'];
                          
                                  strMont = this.convertirAString(Number.parseInt(strMonth.substr(5, 2)));
                                  if(meses.indexOf(strMont) != -1){
                                    arrayIdx.push(i);
                                  }
                                }
                            }
                          }
                        
                        for (var i = 0; i < arrayIdx.length; i++) {
                          switch (this.listaAlquileres[arrayIdx[i]]['id_sucursal']) {
                            case 1:
                                  sumComisionRM += Number.parseFloat(this.listaAlquileres[arrayIdx[i]]['comision']);
                                  data.push([{ data: [anio, sumComisionRM], label: 'Ramos Mejía'}]);
                                  console.log(data);
                              break;
                            case 2:
                                  sumComisionCF += Number.parseFloat(this.listaAlquileres[arrayIdx[i]]['comision']);
                                  data = [{ data: [anio, sumComisionCF], label: 'Capital Federal'}]
                                  console.log(data);                            
                            break;
                            
                            case 3:
                                  sumComisionTUR += Number.parseFloat(this.listaAlquileres[arrayIdx[i]]['comision']);
                                  data = [{ data: [anio, sumComisionTUR], label: 'Turdera'}]
                                  console.log(data);
                              break;
                          
                            default:
                              break;
                          }
                        }
                      
      break;
  
    default:
      break;
  }
  console.log('data:', data);
  return data;
}

private dibujarGrafica(categoria:string, anio?:string, ...meses:string[]){
  switch (categoria) {
    case 'alquileres':
                      this.barChartLabels = [anio];
                      this.barChartData = this.extraerData(this.categoria, this.anio,'Noviembre');
                      console.log(this.barChartData);
      break;
  
    default:
      break;
  }
}


validarMeses(valor){
  
}


private filtrarAniosAlquileres(){

  let j = 0;
  let arrayAnios = new Array();
  for (var i = 0; i < this.listaAlquileres.length; i++) {

    let anio = new Date(this.listaAlquileres[i]['fecha']).getFullYear();
    

    if (this.listaAlquileres.indexOf(anio) >=0 ) {
      continue;
    }else{
      arrayAnios[j]=anio;
      j++;
    }
  }
 
  let h =0;
  for (var i = 0; i < arrayAnios.length; i++) {
    let anio = arrayAnios[i]; 
    if (this.aniosAlquileresFiltrados.indexOf(anio) == -1) {
       this.aniosAlquileresFiltrados[h] =  arrayAnios[i];
      h++; 
    }else{
     continue;
    }    
  }
  this.filtrarMesesAlquileres();
 
}

private filtrarAniosVentas(){
 
  let j = 0;
  let arrayAnios = new Array();
  //console.log(this.listaVentas);
  for (var i = 0; i < this.listaVentas.length; i++) {

    let anio = new Date(this.listaVentas[i]['fecha']).getFullYear();
    

    if (this.listaVentas.indexOf(anio) >=0 ) {
      continue;
    }else{
      arrayAnios[j]=anio;
      j++;
    }
  }
 
  let h =0;
  for (var i = 0; i < arrayAnios.length; i++) {
    let anio = arrayAnios[i]; 
    if (this.aniosAlquileresFiltrados.indexOf(anio) == -1) {
       this.aniosAlquileresFiltrados[h] =  arrayAnios[i];
      h++; 
    }else{
     continue;
    }    
  }
  this.filtrarMesesVentas();
 
}

private filtrarMesesAlquileres(){
  let j = 0;
  let arrayMeses = new Array();
  //console.log(this.listaVentas);
  for (var i = 0; i < this.listaAlquileres.length; i++) {

    let mes = new Date(this.listaAlquileres[i]['fecha']).getUTCMonth() + 1;
    
     //console.log('iteracion: ',i, 'valor', mes);

    if (this.listaAlquileres.indexOf(mes) >=0 ) {
      continue;
    }else{
      arrayMeses[j]=mes;
      j++;
    }
  }

  let h =0;
  for (var i = 0; i < arrayMeses.length; i++) {
    let mes = arrayMeses[i]; 
    if (this.mesesAlquileresFiltrados.indexOf(mes) == -1) {
       this.mesesAlquileresFiltrados[h] =  arrayMeses[i];
      h++; 
    }else{
     continue;
    }    
  }
  //console.log(this.mesesAlquileresFiltrados);
  this.maskMeses(this.mesesAlquileresFiltrados);

}

private filtrarMesesVentas(){
  this.mesesAlquileresFiltrados.length=0;
  let j = 0;
  let arrayMeses = new Array();
  //console.log(this.listaVentas);
  for (var i = 0; i < this.listaVentas.length; i++) {

    let mes = new Date(this.listaVentas[i]['fecha']).getUTCMonth() + 1;
    
     //console.log('iteracion: ',i, 'valor', mes);

    if (this.listaVentas.indexOf(mes) >=0 ) {
      continue;
    }else{
      arrayMeses[j]=mes;
      j++;
    }
  }

  let h =0;
  for (var i = 0; i < arrayMeses.length; i++) {
    let mes = arrayMeses[i]; 
    if (this.mesesAlquileresFiltrados.indexOf(mes) == -1) {
       this.mesesAlquileresFiltrados[h] =  arrayMeses[i];
      h++; 
    }else{
     continue;
    }    
  }
  this.maskMeses(this.mesesAlquileresFiltrados);
}

mesAlquileres(valor){
 this.anio = valor; //capturar el año filtrado
 //this.dibujarGrafica(this.categoria, this.anio, 'Noviembre');

}

anioAlquileres(valor){
 this.categoria = 'alquileres';
 this.ocultarCkbox = true;
 this.aniosAlquileresFiltrados.length=0; //vaciar array
 this.filtrarAniosAlquileres();
 //this.dibujarGrafica(this.categoria, this.anio, 'Noviembre');

}

anioVentas(valor){
  this.categoria = 'ventas';
  this.ocultarCkbox = true;
  this.anio = '2017'; //por default
  this.aniosAlquileresFiltrados.length=0;
  this.filtrarAniosVentas();
  //this.dibujarGrafica(this.categoria, this.anio, 'Noviembre');
}

totalVentas(){
  this.categoria = 'total de ventas';
  this.ocultarCkbox = false;
}

totalAlquileres(){
  this.categoria = 'total de alquileres';
  this.ocultarCkbox = false;
}

private maskMeses(vector){
  for (var i = 0; i < vector.length; i++) {
    switch (vector[i]) {
      case 1:
            this.mesesAlquileresFiltrados[i] = 'Enero';
        break;
      
      case 2:
            this.mesesAlquileresFiltrados[i] = 'Febrero';
        break;
      
      case 3:
            this.mesesAlquileresFiltrados[i] = 'Marzo';
        break;

      case 4:
            this.mesesAlquileresFiltrados[i] = 'Abril';
        break;
      case 5:
            this.mesesAlquileresFiltrados[i] = 'Mayo';
        break;

      case 6:
            this.mesesAlquileresFiltrados[i] = 'Junio';
        break;
      
      case 7:
            this.mesesAlquileresFiltrados[i] = 'Julio';
        break;

      case 8:
            this.mesesAlquileresFiltrados[i] = 'Agosto';
        break;
      case 9:
            this.mesesAlquileresFiltrados[i] = 'Septiembre';
        break;

      case 10:
            this.mesesAlquileresFiltrados[i] = 'Octubre';
        break;
      
       case 11:
            this.mesesAlquileresFiltrados[i] = 'Noviembre';
        break;

      case 12:
            this.mesesAlquileresFiltrados[i] = 'Diciembre';
        break;
    
      default:
        break;
    }    
  }
}

private convertirAString(mes:number){
  let strMonth:string='';
  switch (mes) {
   case 1:
            strMonth = 'Enero';
        break;
      
      case 2:
            strMonth = 'Febrero';
        break;
      
      case 3:
            strMonth = 'Marzo';
        break;

      case 4:
            strMonth = 'Abril';
        break;
      case 5:
            strMonth = 'Mayo';
        break;

      case 6:
            strMonth = 'Junio';
        break;
      
      case 7:
            strMonth = 'Julio';
        break;

      case 8:
            strMonth = 'Agosto';
        break;
      case 9:
            strMonth = 'Septiembre';
        break;

      case 10:
            strMonth = 'Octubre';
        break;
      
       case 11:
            strMonth = 'Noviembre';
        break;

      case 12:
            strMonth = 'Diciembre';
        break;
    
      default:
        break;
    }
    return strMonth;    
}




}
