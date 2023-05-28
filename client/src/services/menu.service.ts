import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  constructor(private http: HttpClient) {}

  getPasta() {
    return this.http.get(`${environment.backend_root}/menu/getPastas`);
  }

  getSnacks() {
    return this.http.get(`${environment.backend_root}/menu/getSnacks`);
  }

  getPizza() {
    return this.http.get(`${environment.backend_root}/menu/getPizzas`);
  }

  getSalads() {
    return this.http.get(`${environment.backend_root}/menu/getSalads`);
  }

  getSchnitzels() {
    return this.http.get(`${environment.backend_root}/menu/getSchnitzels`);
  }
}
