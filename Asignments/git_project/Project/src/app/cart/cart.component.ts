import { Component, OnInit } from '@angular/core';
// import {ProductsService} from '../products.service';
import {CartService} from '../cart.service';
import { createNodeAtIndex } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartObjArr = [];
  cartIndex:Array<number> = [];
  quantityArr:Array<number> = [];
  total:number = 0;
  totalArr;

  constructor(private cartService: CartService) {
    this.cartObjArr = cartService.getCartItem();
    this.cartIndex = cartService.getCartIndices();
    this.quantityArr = cartService.getQuantity();
    this.totalArr = cartService.getTotalArr();
    console.log("size of arry: "+this.totalArr.length);
    this.computeTotal();
  }
  computeTotal(){
    this.total=0;
    for(var i=0;i<this.totalArr.length ; i++){
       let index = this.totalArr[i];
       if(this.cartObjArr[index].price){
        this.total = this.total + this.cartObjArr[index].price * this.quantityArr[index];
       }
    }
    console.log("Total is "+this.total)
  }


  ngOnInit() {
    

  }

}
