import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) {}

  getPastas(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.backend_root}/pasta/getpastaList`);
  }

  getpizza(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.backend_root}/pizza/getpizzaList`);
  }
  
  getsalat(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.backend_root}/salat/getsalatList`);
  }
  
  getschnitzelList(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.backend_root}/schnitzel/getschnitzelList`);
  }
  
  getsnacksList(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.backend_root}/snacks/getsnacksList`);
  }
}
