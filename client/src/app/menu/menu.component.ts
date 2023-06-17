import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { ProductService } from 'src/services/products.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  menuArray = [
    {foodName:'Pasta' , isShown: true, id:'menu-starters'},
    {foodName:'Schnitzel' , isShown: false, id:'menu-breakfast'},
    {foodName:'Snack´s' , isShown: false, id:'menu-lunch'},
    {foodName:'Pizza' , isShown: false, id:'menu-dinner'},
    {foodName:'Salat' , isShown: false, id:'menu-salat'}
  ];
  pastaArray: any[];
  pizzaArray: any[];
  salatArray: any[];
  schnitzelArray: any[];
  SnacksArray: any[];
  
  constructor(private modalService: NgbModal,
              private productsService : ProductService) { }

  ngOnInit(): void {
    this.prepareData();
  }

  prepareData(){
    this.getPastaList();
    this.getpizzaList();
    this.getsalatList();
    this.getschnitzelList();
    this.getsnacksList();
 
  }


  getPastaList(){
    this.productsService.getPastas().pipe(
      tap(list=>{
        console.log('Pasta list',list)
        this.pastaArray= list})
    ).subscribe();
  }

  getpizzaList(){
    this.productsService.getpizza().pipe(
      tap(list=>{
        console.log('pizza list',list)
        this.pizzaArray= list})
    ).subscribe();
  }


  getsalatList(){
    this.productsService.getsalat().pipe(
      tap(list=>{
        console.log('salat list',list)
        this.salatArray= list})
    ).subscribe();
  }


  getschnitzelList(){
    console.log('schnitzel list')
    this.productsService.getschnitzelList().pipe(
      tap(list=>{
        console.log('schnitzel list',list)
        this.schnitzelArray= list})
    ).subscribe();
  }


  getsnacksList(){
    this.productsService.getsnacksList().pipe(
      tap(list=>{
        console.log('snacks list',list)
        this.SnacksArray= list})
    ).subscribe();
  }
  
  
  
  
  
  
  
  
  
  
  
  navigateTo(path:string){
    this.menuArray.forEach(el => {
      if (el.id===path){
        el.isShown = true;
      }else{
        el.isShown = false
      }
    });
  }
  fullSceenAction(item:any){
    this.modalService.open(item, { size: 'xl', centered: true });
  }


  openModal(){
    // this.modalService.open()
  }
}
