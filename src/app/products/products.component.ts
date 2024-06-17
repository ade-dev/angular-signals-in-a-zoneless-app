import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { BasketService } from '../services/basket.service';
import { Product } from '../interfaces/product';
import { products } from '../data/products-list';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DecimalPipe, QuantitySelectorComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  basketService = inject(BasketService);

  productList = signal<Product[]>([]);
  basketLinkTxt = 'in basket';

  getProductList() {
    this.productList.set(products);
  }

  basketItemCount(itemId: number): number {
    return this.basketService.getItemCount(itemId);
  }

  addToBasket(product: Product) {
    this.basketService.addItem(product);
  }

  ngOnInit(): void {
    this.getProductList();
  }
}
