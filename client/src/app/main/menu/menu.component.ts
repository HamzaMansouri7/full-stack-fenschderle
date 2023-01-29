import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
   pastaArray = [
    {id:2201,name:'Diavolo', pictures:'assets/img/menu/diavolo.png', price: 10.50, description:'Frische selbstgemachte Tomatensauce,frische Paprika,Peperoni-Wurst und Knoblauch',quantity:123456,categoryId:'good' },
    {id:2202,name:'Amadriciana', pictures:'assets/img/menu/amadriciana.png', price: 11.50, description:'Frische selbstgemachte Tomatensauce,frische Paprika,Peperoni-Wurst und Knoblauch',quantity:2222,categoryId:'good'},
    {id:2203,name:'Casa', pictures:'assets/img/menu/menu-item-3.png', price: 11.50 , description:'Frische selbstgemachte Tomatensauce,Sahne,Kirschtomaten,Broccoli,frische Champignons und Garnelen',quantity:123456,categoryId:'good'},
    {id:2204,name:'alla Verdure' , pictures:'assets/img/menu/alla-Verdure.png', price: 11.50 , description:'Frische selbstgemachte Tomatensauce,Gemüse,Knoblauch und Basilikum',quantity:2222,categoryId:'good'},
    {id:2205,name:'al Salmone' , pictures:'assets/img/menu/menu-item-5.png', price: 12.50 , description:'Frische selbstgemachte Tomatensauceund Räucherlachs',quantity:2222,categoryId:'good' },
    {id:2206,name:'Frutti di Mare' , pictures:'assets/img/menu/frutti-di-mare.png', price: 13.50 , description:'Frische selbstgemachte Tomatensauce,Knoblauch und Meeresfrüchte',quantity:2222,categoryId:'good' },
  ]
   schnitzelArray = [
    {id:2207, name:'Schnitzel Wiener Art', pictures:'assets/img/menu/schnitzel-winer.png', price:9.50 , price2: 12.50, description:'mit Pommes und beilagen Salat',quantity:2222,categoryId:'good' },
    {id:2208, name:'Schnitzel Wiener Art', pictures:'assets/img/menu/pngegg1.png', price:10.00,price2: 13.50, description:'mit Rigatoni Mafiosi oder Pasta und Sauce nach Wahl',quantity:2222,categoryId:'good' },
    {id:2209, name:'Parmesan-schnitzel', pictures:'assets/img/menu/schnitzel-3.png', price:10.50,price2: 14.00, description:'mit Rigatoni Mafiosi oder Pasta und Sauce nach Wahl',quantity:2222,categoryId:'good'},
  ]
  SnacksArray = [
  {id:2210,name:'Pommes', pictures:'assets/img/menu/pommes77.png', price:4.00 , description:'mit Ketchup und Mayonnaise',quantity:2222,categoryId:'good'},
  {id:2211,name:'Country Potatoes', pictures:'assets/img/menu/download222.png', price:4.50 , description:'mit Ketchup und Mayonnaise',quantity:2222,categoryId:'good'},
  {id:2212,name:'Currywurst mit Pommesoes', pictures:'assets/img/menu/pngwing.com.png', price:7.50 , description:'mit Ketchup und Mayonnaise',quantity:2222,categoryId:'good'},
  {id:2213,name:'Wurstsalat', pictures:'assets/img/menu/pngwing.com1.png', price:6.50, price2:8.50 , description:'gerne mit Käse und Zwiebeln',quantity:2222,categoryId:'good'},
  ]

  pizzaArray = [
    {id:2214,name:'Margherita', pictures:'assets/img/menu/pizza-marghrita.png', price: 10 , description:'Mozzarella,Basilikum',quantity:2222,categoryId:'good' },
    {id:2215,name:'Salami', pictures:'assets/img/menu/pizza-salami.png', price: 11, description:'Salami,Peperoni.Lombardi,Champignons,Mozzarella,käse',quantity:2222,categoryId:'good' },
    {id:2216,name:'Prosciutto e Funghi', pictures:'assets/img/menu/Pizza-Prosciutto e Funghi.png', price: 11 , description:'Schinken,Champignons,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2217,name:'Diavolo' , pictures:'assets/img/menu/pizza-diavalio.png', price: 10 , description:'scharfe Salami,Paprika,Mozzarella,käse',quantity:2222,categoryId:'good' },
    {id:2218,name:'Pizza a la Lui' , pictures:'assets/img/menu/pizza-de-lui.png', price: 12 , description:'Schinken,Tomaten,Knoblauch,Basilikum,Mozzarella',quantity:2222,categoryId:'good' },
    {id:2219,name:'Vegetaria' , pictures:'assets/img/menu/vegetaria.png', price: 13 , description:'gegrilltes Gemüse,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2220,name:'Rustica' , pictures:'assets/img/menu/pizza-rustica.png', price: 13 , description:'Salami,Zwiebeln,Champignons,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2221,name:'Quattro Stagione' , pictures:'assets/img/menu/pizza-quattro.png', price: 13 , description:'Schinken,Champignons,Artischocken,schwarze,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2222,name:'Chef' , pictures:'assets/img/menu/pizza-de-lui.png', price: 13 , description:'Parmaschinken,Ruccola,Parmesanraspeln,Kirschtomaten,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2223,name:'Calabra' , pictures:'assets/img/menu/menu-item-6.png', price: 13 , description:'Schinken,rote.Zwiebeln,schafskäse,Muskatnuss,Mozzarella',quantity:2222,categoryId:'good'},
    {id:2224,name:'Napoletana' , pictures:'assets/img/menu/pizza-napoletana.png', price: 13 , description:'Sardellen,Kapern,Oregano,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2225,name:'Frutti di Mare' , pictures:'assets/img/menu/pizza-Frutiidi mare.png', price: 13 , description:'Meeresfrüchte,Knoblauch,Petersilie,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2226,name:'Calzone' , pictures:'assets/img/menu/calzone.png', price: 13 , description:'schinken,Champignon,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2227,name:'Tonno e Cipolla' , pictures:'assets/img/menu/calzone.png', price: 13 , description:'Thunfisch,rote Zwiebeln,Mozzarella,käse',quantity:2222,categoryId:'good'},
    {id:2228,name:'Speciale' , pictures:'assets/img/menu/pizza-special.png', price: 13 , description:'schinken,Salami,Champignon,rote.Zwiebeln,Paprika,Mozzarella,käse',quantity:2222,categoryId:'good'},
  ]
   salatArray = [
    {id:2229,name:'beilagen',pictures:'assets/img/menu/beilagen.png', price: 9,description:'kleiner Insalata Mista',quantity:2222,categoryId:'good' },
    {id:2230,name:'Insalata Caprese',pictures:'assets/img/menu/insalat-caprese.png',price: 10, description:'Tomate, Mozzarella,Ruccola',quantity:2222,categoryId:'good' },
    {id:2231,name:'Insalata Mista',pictures:'assets/img/menu/salat-mista.png',price: 10, description:'Tomate,Gurke,karotte,schafskäse',quantity:2222,categoryId:'good'},
    {id:2232,name:'Italienischer salat',pictures:'assets/img/menu/italiane-salat.png', price1: 9,description:'kleiner Insalata Mista' ,quantity:2222,categoryId:'good'},
    {id:2233,name:'Chefsalata',pictures:'assets/img/menu/salat-chef.png',price: 10, description:'Tomate, Mozzarella,Ruccola' ,quantity:2222,categoryId:'good'},
    {id:2234,name:'Dressings',pictures:'assets/img/menu/dressings.png',price: 10, description:'Tomate,Gurke,karotte,schafskäse',quantity:2222,categoryId:'good'},
  ]

  menuArray = [
    {foodName:'Pasta' , isShown: true, id:'menu-starters'},
    {foodName:'Schnitzel' , isShown: false, id:'menu-breakfast'},
    {foodName:'Snack´s' , isShown: false, id:'menu-lunch'},
    {foodName:'Pizza' , isShown: false, id:'menu-dinner'},
    {foodName:'Salat' , isShown: false, id:'menu-salat'}
  ];
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  navigateTo(path:string){
    console.log('path', path)
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
