import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { SharedService } from 'src/services/shared.service';
import { createLogicalAnd } from 'typescript';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public products: any[];
  totalCardPrice: any;


  constructor(private cartService: CartService,
              private sharedService: SharedService) { }



  ngOnInit(): void {
    this.products = this.sharedService.getAllCookies();
    console.log(this.products)
    this.totalCardPrice = this.products
      .map((item: any) => item.totProdPrice)
    console.log('this.totalCardPrice', this.totalCardPrice)
    this.totalCardPrice = this.products.reduce((acc: any, item: any) => acc + item.totProdPrice, 0);
    console.log('this.totalCardPrice', this.totalCardPrice)

  }
  // toDo:
  removeItem(item: any) {
    console.log('item', item);
    this.cartService.deleteItemFromCart(item.id);
  }

  emptycart() {
    this.cartService.deleteAllprodCart(this.products);
  }

  performPaiement() {

  }

  increaseQte() {

  }

  descrease() {

  }

}

