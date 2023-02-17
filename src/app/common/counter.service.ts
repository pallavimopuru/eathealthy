import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable()
export class CounterService {
  ActivetoInactiveCounter=0;
  InactivetoActiveCounter=0;
constructor(private userservice:UsersService){}
IncrementActivetoInactive(){
  this.ActivetoInactiveCounter++;
  console.log('Active to inactive'+this.ActivetoInactiveCounter);
}
IncrementInactivetoActive(){
  this.InactivetoActiveCounter++;
  console.log('Inactive to Active'+this.InactivetoActiveCounter);
}
}
