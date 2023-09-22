import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage {
  datosRegistro: any; // Variable para almacenar los datos recuperados

  constructor() {}

  ionViewWillEnter() {
    // Recuperar los datos guardados en localStorage
    const datos = localStorage.getItem('datosRegistro');
    if (datos) {
      this.datosRegistro = JSON.parse(datos);
    }
  }
}