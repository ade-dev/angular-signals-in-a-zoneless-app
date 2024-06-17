import { Component, inject, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MessageService } from '../services/message.service';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  messageService = inject(MessageService);
  basketService = inject(BasketService);

  constructor() {
    effect(() => {
      const totalItems = this.basketService.totalItemsCount();
      this.messageService.setMessage(`You have ${totalItems} item${totalItems > 1 ? 's' : ''} in your basket`);
    });
  }

  totalBasketCount = this.basketService.totalItemsCount;
}
