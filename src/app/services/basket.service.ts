import { Injectable, signal, computed } from '@angular/core';
import { BasketItem } from '../interfaces/basket-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketItems = signal<BasketItem[]>([]);

  /**
   * Gets the total number of all items in the basket.
   * 
   * Uses the signals compute method to compute
   * the total number from the basketItems signal.
   */
  totalItemsCount = computed(() =>
    this.basketItems().reduce(
      (acc, item) => acc + item.quantity, 0
    )
  );

  /**
   * Gets the total price of all items in the basket.
   * 
   * Uses the signals compute method to compute
   * the total price from the basketItems signal.
   */
  totalItemsPrice = computed(() =>
    this.basketItems().reduce(
      (acc, item) => acc + item.quantity * item.product.price, 0
    )
  );

  /**
   * Adds an item to the basket.
   * 
   * Uses the signals update method 
   * to update the basketItems signal.
   * 
   * @param product The item to add..
   */
  addItem(product: Product) {
    this.basketItems.update(items => [...items, { product, quantity: 1 }]);
  }

  /**
   * Updates the number of an item in the basket.
   * 
   * Uses the signals update method to update the basketItems signal.
   * 
   *  @param productId The id of the item.
   *  @param operator A reference to the operator 'plus' or 'minus'.
   */
  updateItemQuantity(productId: number, operator: string) {
    this.basketItems.update((items) =>
      items.map((item) =>
        productId === item.product.id
          ? {
            product: item.product,
            quantity: operator === 'plus'
              ? item.quantity + 1
              : item.quantity - 1
          }
          : item
      )
    );
  }

  /**
   * Gets the number of an item in the basket.
   * 
   * @param productId The id of the item.
   * @returns Number of the item.
   */
  getItemCount(productId: number): number {
    const item = this.basketItems().find(i => i.product.id === productId);
    return item ? item.quantity : 0;
  }

  /**
   * Removes an item from the basket.
   * 
   * Uses the signals update method to update the basketItems signal.
   * 
   * @param productId The id of the item.
   */
  removeItem(productId: number) {
    this.basketItems.update((items) =>
      items.filter((i) => productId !== i.product.id)
    );
  }
}
