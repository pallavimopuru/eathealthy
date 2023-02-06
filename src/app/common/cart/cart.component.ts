import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  numbers=[1,2,3,4,5];
  onlyodd:boolean = false;
  show:boolean = false;
  btn:any='show ngtemplate'
  oddNumbers=[1,3,5];
  evenNumbers=[2,4,6];
  value=15;
  buttonName:any = 'only show even';
  toggle(){
    this.onlyodd = !this.onlyodd;
    if(this.onlyodd)
    this.buttonName = "only show even";
  else
    this.buttonName = "only show odd";
  }
  showngtemplate(){
    this.show = !this.show;
    if(this.show)
    this.btn = "show ngtemplate";
  else
    this.btn = "hide ngtemplate";
  }
ngOnInIt(){

}
}
