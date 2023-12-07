import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl = 'http://localhost:4200/book-table'; // your Node.js server address

  constructor(private http: HttpClient) {}

  sendEmail(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/send-email`, data);
  }
}
