import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username;
  password;
  email;
  flag;
  accept;
  constructor(public productService: ProductsService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.flag = this.productService.regLogin(this.username, this.password, this.email);
    this.flag.subscribe(x => {this.accept=x;
      if(this.accept === true) {
        this.router.navigate(['/login']);
      }
    });

  }

  direct() {

  }
}
