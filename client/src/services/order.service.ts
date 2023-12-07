import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, Product } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  getProducts(order:Order) {
    // Implement the logic to retrieve products from the API
    return this.http.post(`${environment.backend_root}/order/newOrder`, order);
  }

  addOrder(orderToAdd: any) {
    console.log('order',orderToAdd);
    return this.http.post(`${environment.backend_root}/order/newOrder`,orderToAdd);
  }
}
