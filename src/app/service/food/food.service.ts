import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  FoodService(arg0: string) {
    throw new Error('Method not implemented.');
  }
  logStatusChanges(status:string){
    console.log('a server status got chnagesd'+status)
  }
  constructor() {}
  getAll() {
    // return[
    //   '../../../assets/biryani.jfif',
    //   '../../../assets/burger.jfif',
    //   '../../../assets/dessert.jfif',
    //   '../../../assets/food.jfif',
    //   '../../../assets/north indian.jfif',
    //   '../../../assets/piza.jfif',
    //   '../../../assets/south indian.jfif',
    // ];
    return [
      { Img: '../../../assets/biryani.jfif', count: 0, reduce: 0 },
      { Img: '../../../assets/burger.jfif', count: 0, reduce: 0  },
      { Img: '../../../assets/north indian.jfif', count: 0, reduce: 0  },
      { Img: '../../../assets/south indian.jfif' , count: 0, reduce: 0 },
      { Img: '../../../assets/piza.jfif', count: 0, reduce: 0  },
      { Img: '../../../assets/desserts.jfif' , count: 0, reduce: 0 },
    ];
  }
}
