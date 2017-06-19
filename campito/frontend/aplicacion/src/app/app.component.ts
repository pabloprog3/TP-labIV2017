import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import {LoginComponent} from './componentes/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private rouuter: Router){}



}
