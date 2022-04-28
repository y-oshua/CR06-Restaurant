import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { iProducts } from '../iProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: iProducts[] = [];

  checkoutForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('')
    }
  )

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  displaySubTotal() {
    var subTotal = 0;
    for (let item of this.items) {
      subTotal = subTotal + item.price;
    }
    return subTotal;
  }

  displayServiceFee() {
    var subTotal: number = this.displaySubTotal();
    var serviceFee: number = 0;
    serviceFee = subTotal * 0.1;

    return serviceFee;
  }

  displayTotal() {
    var subTotal: number = this.displaySubTotal();
    var serviceFee: number = this.displayServiceFee();
    var total: number = subTotal + serviceFee;

    console.log(subTotal);
    return total;
  }

  displayFinalAmount() {
    var total: number = this.displayTotal();
    if (total > 40) {
      var finalAmount = total * 0.85;
    } else {
      var finalAmount = total;
    }
    return finalAmount;
  }
}
