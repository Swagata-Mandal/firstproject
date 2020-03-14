import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  text:string;
  menulist:string;
 username:string;
 menu1:string;
 isShow=true;
 islogin =false
  constructor() { }

  ngOnInit(): void {
  }
  // addMenuShow(){
  //   this.menulist = this.menu1;
  // }
   userName: string;

  onClick(){
    // this.text=this.username;
    this.menulist = this.menu1;
    
  }
  menuDisplay() {
    this.isShow = !this.isShow;
    this.islogin= true;
    this.text=this.username;
  }
  menuDisable(){
    this.isShow =!this.isShow;
    // this.text=this.username;
  }
}
