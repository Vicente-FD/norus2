import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage {

  constructor(private router: Router) {}

  redirectToHome() {
    // Aquí puedes especificar la redirección a la página de inicio.
    // Por ejemplo, si tienes una página llamada 'HomePage':
    this.router.navigate(['/home']);
  }
}