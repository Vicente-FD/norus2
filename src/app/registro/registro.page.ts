import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router'; // Importar el Router
import { AlertController, AnimationController, IonInput } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  @ViewChildren(IonInput, { read: ElementRef }) inputs!: QueryList<ElementRef>;

  tempUsername: string | null = localStorage.getItem('tempUsername');

  private animacionInputs!: Animation;
  private input1!: Animation;
  private input2!: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private alertController: AlertController,
    private router: Router // Inyectar el Router
  ) {}

  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacional: string = '';
  fechaNacimiento: string = '';

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacional = '';
  }

  ngAfterViewInit() {
    this.animacionInputs = this.animationCtrl
      .create()
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2');
  }

  ejecutarAnimacion() {
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

  async mostrarYGuardarDatos() {
    const datos = {
      usuario: this.usuario,
      nombre: this.nombre,
      apellido: this.apellido,
      nivelEducacional: this.nivelEducacional,
      fechaNacimiento: this.fechaNacimiento,
    };

    localStorage.setItem('datosRegistro', JSON.stringify(datos));

    // Navegar a la página "segment"
    this.router.navigate(['/segment']);
  }
}