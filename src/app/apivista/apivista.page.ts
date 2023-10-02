import { Component, OnInit } from '@angular/core';
import { ApiRegiones } from '../api-regiones.service';

@Component({
  selector: 'app-apivista',
  templateUrl: './apivista.page.html',
  styleUrls: ['./apivista.page.scss'],
})
export class ApivistaPage implements OnInit {
  datosRegiones: any[] = [];
  idBuscado: number = 1; // ID por defecto
  nombreRegion: string = ''; // Variable para almacenar el nombre de la región encontrada

  constructor(private apiRegiones: ApiRegiones) { }

  ngOnInit() {
    this.apiRegiones.getDatos().subscribe((response) => {
      // Asegúrate de que la estructura de la respuesta sea correcta
      if (response.success && Array.isArray(response.data)) {
        this.datosRegiones = response.data;
        // Realiza una búsqueda inicial solo después de cargar los datos
        this.buscarRegion();
      } else {
        this.nombreRegion = 'Datos de región no disponibles';
      }
    });
  }

  buscarRegion() {
    // Busca el nombre de la región correspondiente al ID deseado
    const regionEncontrada = this.datosRegiones.find(region => region.id === this.idBuscado);

    if (regionEncontrada) {
      this.nombreRegion = regionEncontrada.nombre;
    } else {
      this.nombreRegion = 'Región no encontrada';
    }
  }
}