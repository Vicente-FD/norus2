import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'authenticatedUser';

  constructor(private alertController: AlertController) {}

  async login(username: string, password: string): Promise<boolean> {
    if (password.length !== 4 || !/^[0-9]*$/.test(password)) {
      const alert = await this.alertController.create({
        header: 'Error de autenticación',
        message: 'La contraseña debe tener 4 caracteres numéricos.',
        buttons: ['OK']
      });

      await alert.present();
      return false; // Retornar falso ya que la contraseña no cumple con los requisitos
    }

    // Aquí, podrías implementar una lógica más robusta, como validar con una base de datos o un sistema de autenticación más seguro.
    // Por ahora, solo almacenaremos el usuario en el almacenamiento local.
    localStorage.setItem(this.userKey, JSON.stringify({ username }));
    return true; // Retornar verdadero para indicar que el inicio de sesión fue exitoso.
  }

  logout() {
    localStorage.removeItem(this.userKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.userKey);
  }

  getUsername(): string | null {
    const authenticatedUser = localStorage.getItem(this.userKey);
    if (authenticatedUser) {
      return JSON.parse(authenticatedUser).username;
    }
    return null;
  }
}