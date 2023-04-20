import { Inject, Injectable } from '@angular/core';
import { GlobalObjectServiceService } from 'src/app/global-object-service.service';
import { DOCUMENT } from '@angular/common';
import { SharedService } from './shared.service';
import { Product } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService  {
  cart :any = []
  productArray :any = []
  constructor(private GlobalObjectServiceService: GlobalObjectServiceService,@Inject(DOCUMENT) private document: Document,private sharedService:SharedService) { }

  getProductCart(){
    this.productArray = this.cart
    if (this.productArray.length < 1) {
      let cookie: any
      cookie = this.sharedService.getAllCookies()
      Object.entries(cookie).forEach(([key, val]) => {
        var element = JSON.stringify(val);
        if (element.length > 1000) {
          var parsed = JSON.parse(JSON.parse(element));
          this.productArray.push(parsed)
        }
      }
      );
    }
    this.cart = this.productArray
    return this.cart
  }

addProduct(product: Product) {
    this.cart =this.sharedService.getAllCookies();
    const existingProductIndex = this.cart.findIndex((item:any) => item.id === product.id);
    if (existingProductIndex >= 0) {
      console.log('this.cart[existingProductIndex].quantity',this.cart[existingProductIndex].quantity);
      this.cart[existingProductIndex].quantity = this.cart[existingProductIndex].quantity + product.quantity;
    } else {
      this.cart.push(product);
    }
    console.log('this.cart',this.cart);
    this.updateCookie(this.cart);
}
  
updateCookie(cart: any[]) {
    const jsonStr = JSON.stringify(cart);
    this.document.cookie = `cart=${jsonStr}; path=/`;
    this.getProductCart()
    return this.cart;
  }
  

  deleteItemFromCart(id:number){
    this.document.cookie = "cart"+id+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }

    deleteAllprodCart(productArray:any){
      productArray.forEach((element: { id: number; }) => {
        this.deleteItemFromCart(element.id)
      });
      this.cart=[]
    //   var event = new CustomEvent('updateCartItem', { 'detail': true });
    //   this.GlobalObjectServiceService.getWindow().dispatchEvent(event);
    }
}
