import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { iProducts } from '../iProducts';
import { products } from '../products';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products:iProducts[]=products;

  //everything below is taken from details component, in attempt to copy add to cart function. as well as imports above

  //The cart functionality although it works, has a little flaw: the object isnt passed over to the function. Please note that at the menu component u dont need the object id from the url, only in the details component. The function in the loop needs the object in it, in ur case, "dish" and the same function in menu.ts needs to accept a parameter. The details component is working fine when u fix that. Let me know if u would like to take ur chance and improve ur grade. U have 24hrs from this time on. Well done


  // product: iProducts = {} as iProducts;
  // id: number = 0;

  constructor(
    private CartService: CartService) {}

  ngOnInit(): void {
    // this.product = products[this.id];
  }

 addToCart(product: iProducts){
   window.alert("Product was added to cart")
   this.CartService.addToCart(product);
 }
}