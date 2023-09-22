import { Component } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage {
  segmentValue: string = 'experienciaLaboral'; // Valor por defecto para el segmento

  // Variables para controlar el estado de los campos
  trabajaActualmente: boolean = false;
  certificadoVencimiento: boolean = false;

  constructor() {}

  // Resto de la lógica de tu página
}