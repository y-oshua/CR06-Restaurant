import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { iProducts } from '../iProducts';
import { products } from '../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  product: iProducts = {} as iProducts;
  id: number = 0;

  constructor(
    private route:ActivatedRoute, 
    private CartService: CartService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id =  +params['productId'];
      this.product = products[this.id];
    });
  }
 addToCart(){
   window.alert("Product was added to cart")
   this.CartService.addToCart(this.product);
 }
}
