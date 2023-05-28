
export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public reference?:string,
    public price?: number,
    public categoryId?: number & Category,
    public pictures?:[] | string,
    public quantity?:number,
    public totProdPrice?:number
    
  ) { }
}

export class Order {
  constructor(
    public id?: number, // Order ID (required)
    public products?: Product[], // Array of products included in the order
    public totalAmount?: number, // Total amount of the order
    public customerName?: string, // Name of the customer
    public shippingAddress?: string,
    public paymentMethod?: string,
    public cardExpiration?: number, // Expiration month of the payment card (numeric)
    public cardNumber?: number,
    public cardCvv?: number,
    public receiptEmail?: string, // Email address to receive the payment receipt
    public paymentState?: string // State of the payment (e.g., pending, completed, failed)
  ) {}
}


export class Menu {
  constructor(
    public id?: number, // Order ID (required)
    public products?: Product[], // Array of products included in the order
    public totalAmount?: number, // Total amount of the order
    public customerName?: string, // Name of the customer
    public shippingAddress?: string,
    public paymentMethod?: string,
    public cardExpiration?: number, // Expiration month of the payment card (numeric)
    public cardNumber?: number,
    public cardCvv?: number,
    public receiptEmail?: string, // Email address to receive the payment receipt
    public paymentState?: string // State of the payment (e.g., pending, completed, failed)
  ) {}
}








export class Category {
    constructor(
      public id?:string,
      public name?:string,
      public description?:string,
    ){}
}