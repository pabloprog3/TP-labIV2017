import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css', '../admin/admin.component.css']
})
export class EncargadoComponent implements OnInit {
perfil: string = 'encargado';
  constructor() { }

  ngOnInit() {
  }

}
