import { Component, OnInit } from '@angular/core';
//import {FileUploader} from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-subir-archivos',
  templateUrl: './subir-archivos.component.html',
  styleUrls: ['./subir-archivos.component.css', '../usuarios/usuarios.component.css']
})
export class SubirArchivosComponent implements OnInit {

  URL= 'http://localhost:8080/TP-labIV2017/campito/backend/ws/vendor/slim/slim/fotos';
     
  constructor() { }

  ngOnInit() {
  }

  //public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
