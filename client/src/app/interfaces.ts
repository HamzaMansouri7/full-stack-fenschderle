
export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public reference?:string,
    public price?: number,
    public categoryId?: number & Category,
    public pictures?:[] | string,
    public quantity?:number
  ) { }
}






export class Category {
    constructor(
      public id?:string,
      public name?:string,
      public description?:string,
    ){}
}