import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';
  password: string = '';
  maxUsernameLength: number = 8;
  maxPasswordLength: number = 4;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async login() {
    const loginSuccessful = await this.authService.login(this.usuario, this.password);

    if (loginSuccessful) {
      localStorage.setItem('tempUsername', this.usuario);
      this.router.navigate(['/registro']);
    }
  }

  olvidarNombre() {
    this.usuario = '';
    this.password = '';
  }

  getUsernameErrorMessage() {
    return this.usuario.length > this.maxUsernameLength ? 'Nombre de usuario demasiado largo' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.length > this.maxPasswordLength) {
      return 'Contraseña demasiado larga';
    } else if (this.password.length > 0 && !/^[0-9]*$/.test(this.password)) {
      return 'La contraseña debe ser numérica';
    }
    return '';
  }
}