import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  flag: boolean; 
  fl: any;
  flg: boolean;
  constructor(public data : ProductsService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this. fl = this.data.checkLogin(this.username, this.password);
    this.fl.subscribe(x => {this.flag = x;
      if(this.flag === true) {
        this.router.navigate(['/home']);
      }
    });
  }

}
