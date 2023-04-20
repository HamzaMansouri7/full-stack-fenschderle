import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProductCart()
    // .subscribe((res:any)=>{
    //   this.products = res;
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
  }
  removeItem(item: any){
    this.cartService.deleteItemFromCart(item.id);
  }

  emptycart(){
    this.cartService.deleteAllprodCart(this.products);
  }

}

