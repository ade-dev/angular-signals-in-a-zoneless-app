import { Component, inject, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BasketItemComponent } from '../basket-item/basket-item.component';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [DecimalPipe, BasketItemComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  basketService = inject(BasketService);

  basketItems = this.basketService.basketItems;
  totalBasketPrice = this.basketService.totalItemsPrice;
  totalBasketCount = this.basketService.totalItemsCount;

  totalLabel = computed(() =>
    this.totalBasketCount() > 1 ? 'items' : 'item'
  );
}
