import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name = 'Code EvolutioN';
  myId = 'testID';
  isDisabled = false;
  successClass = 'text-success';
  dangerClass = 'text-danger';
  hasError = 'false';
  isSpecial = 'false';
  reeError = 'false';
  messageClass = {
    'text-success': !this.hasError,

    'text-special': this.isSpecial,
    'text-danger': !this.reeError,
  };
  highlightColor = 'orange';
  titlestyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
  greeting: any;
  ngSwitch: any;
  year = new Date();
  count = 0;
  name1 = '';
  displayname = 'false';
  diplay = 'false';
  colors = ['black', 'green', 'pink', 'blue'];
  // @Input('parentData')  namee: any;
  date = new Date();

  employees = [
    { id: 1, name: 'andrew', age: 30 },
    { id: 2, name: 'pallu', age: 20 },
    { id: 3, name: 'gem', age: 70 },
    { id: 3, name: 'rexa', age: 70 },
  ];
  groups = [
    { id: 1, name: 'andrew', age: 30 },
    { id: 2, name: 'pallu', age: 20 },
    { id: 3, name: 'gem', age: 70 },
    { id: 3, name: 'rexa', age: 70 },
  ];
  row: any;
  item: any;
  employee: any;
  foods: any;
  message = "I'm read only!";
  canEdit = false;
  percentage: number = 10;
  constructor(private fs: FoodService) {}
  reduce(index: any) {
    this.foods.map((res: any, i: any) => {
      if (i == index) {
        console.log('res', res);
        res.count -= 1;
      }
    });
    console.log('res', this.foods);
  }

  addReduce(index: any) {
    this.foods.map((res: any, i: any) => {
      if (i == index) {
        console.log('res', res);
        res.count += 1;
      }
    });
    console.log('res', this.foods);
  }
  onClick(event: any) {
    // alert("welcome to my page");
    alert(event);
    console.log(event); //after click on evnt we can get to know in console wt type of event it is
    this.greeting = 'event.type';
  }

  logmessage(value: any) {
    console.log(value);
  }

  addFood() {
    this.foods = this.fs.getAll();
  }

  saymesssage() {
    alert('jsdhjks');
  }

  clickoneidt() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'you can edit';
    } else {
      this.message = 'you cant edit';
    }
  }

  ngOnInit(): void {
    this.addFood();
    console.log('this.employees', this.employees);
  }
}
