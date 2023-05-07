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
  @Input() products:any
  // photoList: PhotoList=new PhotoList();
  photoLength: number;
  tabImages=[]
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
    // this.products?.pictures?.forEach(element => {
    //   this.tabImages.push(element.url)
    // });
    // this.photoList.photos = this.tabImages;
    // this.photoList.imgObject = []
    // this.photoLength = this.photoList.photos.length
    // if (this.photoList.photos) {
    //   this.photoList.imgObject = []
    //   this.photoList.imgObject = [{active : false , img : this.photoList.photos[Math.abs(0 % this.photoLength)]}]
    //   this.photoList.imgObject[0].active = true
    // }
    this.calculprice();
  }
  fullSceenAction(content: any,products:Product) {
    this.modalService.open(content, { size: 'lg',centered: true});
    this.getOldData()
    //this.verifOldQuantity(products);
    this.inputedQuantity=1
  }

  verifOldQuantity(products:any) {
    if (this.productArray.length>0) {
      this.productArray.forEach((element:any) => {
          if(element.id==products.id){
            this.oldQte=element.quantity

          }
      });
    }
  }

  sendToCart(products:any) {
    this.products.quantity = this.inputedQuantity;
    const UpdatedProduct =  {...products , totProdPrice:   products.price * this.inputedQuantity  }
    this.cartService.addProduct(UpdatedProduct);
    this.itemNumber = this.sharedService.cartItemNumber(this.productArray) || 0
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
    this.productArray = this.cartService.getProductCart()
    if (this.productArray?.length < 1) {
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
    this.itemNumber = this.sharedService.cartItemNumber(this.productArray)
  }

  calculprice(){
    this.price= this.products.price * this.inputedQuantity 
  }
  checkQuantity() {
    if (this.inputedQuantity > 1) {
      alert("Quantity must be at least 1");
    } else {
      // Perform other actions if quantity is valid
    }
  }
  

}
