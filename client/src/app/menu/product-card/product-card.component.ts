import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interfaces';
import { SharedService } from 'src/services/shared.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent  {
  @Input() product:any
  productArray: any;
  itemNumber: number;
  cart:any;
  inputedQuantity: number = 1;
  oldQte:number;
  price:number;
  constructor(private modalService: NgbModal,
              private cartService:CartService,
              private sharedService:SharedService){}
                  
  ngOnChanges() {
    this.calculprice();
  }
  fullSceenAction(cartModal: any,product:Product) {
    this.modalService.open(cartModal, { size: 'lg',centered: true});
    // this.getOldData()
    this.verifOldQuantity(product);
    // this.inputedQuantity=1
  }

  verifOldQuantity(product:any) {
    if (this.productArray.length>0) {
      this.productArray.forEach((element:any) => {
          if(element.id==product.id){
            this.oldQte=element.quantity
            this.inputedQuantity=this.oldQte;
          }
      });
    }
  }

  sendToCart(product:any) {
    this.product.quantity = this.inputedQuantity;
    const UpdatedProduct =  {...product , totProdPrice:   product.price * this.inputedQuantity  }
    this.cartService.addProduct(UpdatedProduct);
    this.itemNumber = this.sharedService.cartItemNumber(this.productArray) || 0;
    // this.router.navigate['/order'];
  }

  increaseValue() {
    this.inputedQuantity = this.inputedQuantity + 1
  }
  decreaseValue() {
    if (this.inputedQuantity > 0) {
      this.inputedQuantity = this.inputedQuantity - 1
    }

  }
  getOldData(){
    this.productArray = this.sharedService.getAllCookies();
    this.itemNumber = this.sharedService.cartItemNumber(this.productArray);
    // this.inputedQuantity = this.itemNumber;
    console.log('itemNumber',this.itemNumber);
  }

  calculprice(){
    this.price= this.product.price * this.inputedQuantity 
  }

  
  checkQuantity() {
    if (this.inputedQuantity > 1) {
      alert("Quantity must be at least 1");
    } else {
      return;
    }
  }
  

}
