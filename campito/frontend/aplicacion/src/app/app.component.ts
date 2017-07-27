import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import {LoginComponent} from './componentes/login/login.component';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private router: Router){}



}
