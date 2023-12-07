import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/services/cart.service';
import { OrderService } from 'src/services/order.service';
import { SharedService } from 'src/services/shared.service';
import { Order, Product } from '../interfaces';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public products: Product[];
  totalCardPrice: any;
  cardholderName: string = '';
  receiptEmail: string ;
  cardNumber: number;
  cardExpiration:Date;
  cardExpiration2:number;
  cardCvv: number;
  formattedDate: Date;
  cardExpiration3:Date;
  orderForm: FormGroup;
  

  constructor(private cartService: CartService, private sharedService: SharedService,
    private modalService: NgbModal,
    private orderService: OrderService ,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.products = this.sharedService.getAllCookies();
    console.log('producyts', this.products)
    this.calculateTotalCardPrice();
    this.orderForm = this.fb.group({
      cardholderName: ['', Validators.required],
      receiptEmail: ['', [Validators.required, Validators.email]],
      cardNumber: ['', [Validators.required, Validators.minLength(19), Validators.maxLength(19)]],
      cardExpiration: ['', Validators.required],
      cardCvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }
  
  removeItem(item: any) {
    console.log('item', item);
    this.cartService.deleteItemFromCart(item.id);
    this.calculateTotalCardPrice();
  }

  emptyCart() {
    this.cartService.deleteAllprodCart(this.products);
    this.products = [];
    this.calculateTotalCardPrice();
  }

  calculateTotalCardPrice() {
    this.totalCardPrice = this.products.reduce((acc: any, item: any) => acc + item.totProdPrice, 0);
  }

  openConfirmationModal(content: any) {
    const modalOptions: NgbModalOptions = {
      centered: true,
      windowClass: 'modal-dialog-top'
    };

    const modalRef = this.modalService.open(content, modalOptions);

    modalRef.result
      .then((doOrderAndPaiement) => {
        console.log('doOrderAndPaiement',doOrderAndPaiement)
        if (!doOrderAndPaiement) {
          return;
        };
        this.addOrderAndPaiement();
      })
      .catch((reason) => {
        console.log('catch reason')
        // Modal dismissed/closed without confirmation
      });
  }

  addOrderAndPaiement() {
    console.log('montXXXXX',typeof this.cardExpiration);
    //const month = new Date(this.cardExpiration).getMonth() + 1; 
    //const year = new Date(this.cardExpiration2).getFullYear(); 
    //const formattedDate = year + '-' + (month < 10 ? '0' : '') + month;
    //console.log('month' , month);
   // console.log('year' , year);
    
    const order :Order= {
      customerName: this.cardholderName, // Cardholder's name from the input field
      customerEmail: this.receiptEmail ,//e,ail
      products: this.products, // Array of selected products
      totalAmount: this.totalCardPrice, // Total price of the order
      cardNumber: this.cardNumber, // Card number from the input field
      cardExpiration3: this.formattedDate, // Card expiration date from the input field
      cardCvv: this.cardCvv // Card CVV from the input field
    };
   
    this.orderService.addOrder(order).subscribe(
      (response) => {
        // Handle the success response
        //this.toastr.success('Success message', 'Success');
       // this.toastr.success("Order added successfully.")
        console.log('Order added successfully:', response);
        // Proceed with the payment
      },
      (error) => {
        // Handle the error response
        console.error('Error adding order:', error);
        // Handle any error notifications or display an error message
      }
    );
    
  // call orderService and give it what he need as object to use it as body for the api call 
  }

  increaseQte(item: any) {
    item.quantity++;
    item.totProdPrice = item.price * item.quantity;
    this.calculateTotalCardPrice();
  }

  decreaseQte(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.totProdPrice = item.price * item.quantity;
      this.calculateTotalCardPrice();
    }
  }

  sortby(type:string){
    // console.log('type:',type);
    // if ( type = price  )
    // // sort products by  preice DESC or ASC 
    // if ( type = qutnityu  )
    // // sort products by  qutnityu DESC or ASC 
  }
 
}
//function showToaster() {
 // throw new Error('Function not implemented.');
//}



