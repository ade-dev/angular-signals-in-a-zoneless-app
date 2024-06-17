import { Component, inject, input, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { BasketItem } from '../interfaces/basket-item';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket-item',
  standalone: true,
  imports: [DecimalPipe, QuantitySelectorComponent],
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.css'
})
export class BasketItemComponent {
  basketService = inject(BasketService);

  item = input.required<BasketItem>();

  // Gets the total price of an item, uses the
  // compute method on the item input signal
  totalProductPrice = computed(() =>
    this.item().product.price * this.item().quantity
  );

  removeFromBasket() {
    this.basketService.removeItem(this.item().product.id);
  }
}
