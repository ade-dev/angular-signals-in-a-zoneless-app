import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  imports: [],
  templateUrl: './quantity-selector.component.html',
  styleUrl: './quantity-selector.component.css'
})
export class QuantitySelectorComponent {
  basketService = inject(BasketService);
  router = inject(Router);

  productId = input.required<number>();
  linkToBasket = input<string>();

  updateBasketQuantity(operator: string) {
    if (this.basketItemCount() === 1 && operator === 'minus') {
      this.basketService.removeItem(this.productId());
    }
    else {
      this.basketService.updateItemQuantity(this.productId(), operator);
    }
  }

  basketItemCount(): number {
    return this.basketService.getItemCount(this.productId());
  }
}
