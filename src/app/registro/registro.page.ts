import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacional: string = '';
  fechaNacimiento: string = '';
  empresa: string = '';
  anoInicio: string = '';
  trabajaActualmente: boolean = false;
  anoTermino: string = '';
  nombreCertificado: string = '';
  fechaObtencion: string = '';
  certificadoVencimiento: boolean = false;
  fechaVencimiento: string = '';

  segmentValue: string = '';
  tempUsername: string = '';

  @ViewChildren('input') inputs!: QueryList<ElementRef>;
  animacionInputs: any;

  constructor(private storage: Storage, private router: Router) {
    // Inicializa Ionic Storage
    this.initStorage();
    // Constructor de tu página
  }

  // Inicializa Ionic Storage
  async initStorage() {
    await this.storage.create();
  }

  limpiar() {
    // Este es el método para limpiar los campos
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacional = '';
    this.fechaNacimiento = '';
    this.empresa = '';
    this.anoInicio = '';
    this.trabajaActualmente = false;
    this.anoTermino = '';
    this.nombreCertificado = '';
    this.fechaObtencion = '';
    this.certificadoVencimiento = false;
    this.fechaVencimiento = '';
  }

  ejecutarAnimacion() {
    // Este es el método para ejecutar la animación
    let transformInicial: string;
    let opacidadInicial: string;

    this.animacionInputs.stop();
    this.inputs.forEach((element: ElementRef) => {
      transformInicial = element.nativeElement.style.transform;
      opacidadInicial = element.nativeElement.style.opacity;
      element.nativeElement.style.transform = 'translateX(0px)';
      element.nativeElement.style.opacity = '1';
      this.animacionInputs.addElement(element.nativeElement);
    });

    this.animacionInputs.play();

    this.animacionInputs.onFinish(() => {
      this.inputs.forEach((element: ElementRef) => {
        element.nativeElement.style.transform = transformInicial;
        element.nativeElement.style.opacity = opacidadInicial;
      });

      this.animacionInputs.stop();
    });
  }

  // Función para mostrar y guardar datos
  async mostrarYGuardarDatos() {
    const data = {
      usuario: this.usuario,
      nombre: this.nombre,
      apellido: this.apellido,
      nivelEducacional: this.nivelEducacional,
      // Agrega otras propiedades aquí
    };

    // Guarda los datos en Ionic Storage
    await this.storage.set('datos', data);

    // Navega a la ventana "datos"
    this.router.navigate(['/datos']);
  }
}