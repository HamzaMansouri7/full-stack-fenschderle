import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'contact',
    loadChildren :()=> import('./contact/contact.module').then(m=>m.ContactModule)
  }, 
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'book-table',
    loadChildren: () => import('./book-table/book-table.module').then(m => m.BookTableModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
