import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage {
  datosRegistro: any = {}; // Inicializar como objeto vacío

  constructor(private storage: Storage) {}

  ionViewWillEnter() {
    // Recuperar los datos desde Ionic Storage usando la misma clave 'datos' que usaste en la página de registro
    this.storage.get('datos').then((datos) => {
      if (datos) {
        this.datosRegistro = datos;
      }
    });
  }
}