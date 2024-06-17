import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ProductsComponent
  }
];
