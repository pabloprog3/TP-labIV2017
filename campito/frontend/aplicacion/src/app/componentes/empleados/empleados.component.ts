import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css', '../admin/admin.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  
  perfil: string = "empleado";

  ngOnInit() {

  }

  salir(){
    
  }

}
