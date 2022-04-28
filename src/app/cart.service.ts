import { Injectable } from '@angular/core';
import { iProducts } from './iProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: iProducts[] = [];





  constructor() { }

  addToCart(product: iProducts) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
