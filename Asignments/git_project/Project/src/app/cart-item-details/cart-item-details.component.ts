import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item-details',
  templateUrl: './cart-item-details.component.html',
  styleUrls: ['./cart-item-details.component.css']
})
export class CartItemDetailsComponent implements OnInit {
  
  @Input() index;
  cartObjArr = [];
  quantity:number[];
  // productTotal:number;
  // @Output() onChecked= new EventEmitter();
  // @Output() onChecked1= new EventEmitter();
  
  constructor(public c:CartService ) {
    this.cartObjArr = c.getCartItem();
    this.quantity = c.getQuantity();
    // console.log(this.index);
   }
   remove(){
    this.c.removeFromCart(this.index);
   }
   decrease(){
     this.c.decreaseCart(this.index);
   }
   increase(){
    this.c.increaseCart(this.index);
  }
  ngOnInit() {
    this.quantity = this.c.getQuantity();
    // this.productTotal = this.quantity[this.index]*this.cartObjArr[this.index].price;
    // console.log("productTotal: in cart-item-details: "+this.productTotal);
    // this.onChecked.emit(this.productTotal);
    // this.onChecked1.emit(this.index);
  }

}
