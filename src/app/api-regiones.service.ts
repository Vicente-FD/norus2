import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRegiones {
  private apiUrl = 'https://dev.matiivilla.cl/duoc/location/region';

  constructor(private http: HttpClient) {}

  getDatos(): Observable<any> {
    // Realiza una solicitud GET a la API
    return this.http.get(this.apiUrl);
  }
}