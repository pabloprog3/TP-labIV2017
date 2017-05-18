import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inmobiliarias El Campito S.A.';

  private visible:boolean=false;


  
  
  private mostrarLogin() {
    this.visible=true;
  }

  private ocultarLogin(){
    this.visible=false;
  }

}

