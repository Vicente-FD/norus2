import { Component, OnInit } from '@angular/core';
import { ApiRegiones } from '../api-regiones.service';

@Component({
  selector: 'app-apivista',
  templateUrl: './apivista.page.html',
  styleUrls: ['./apivista.page.scss'],
})
export class ApivistaPage implements OnInit {
  datosRegiones: any[] = [];

  constructor(private apiRegiones: ApiRegiones) { }

  ngOnInit() {
    this.apiRegiones.getDatos().subscribe((data) => {
      this.datosRegiones = data; // Asegúrate de que la estructura de la respuesta sea correcta
    });
  }
}