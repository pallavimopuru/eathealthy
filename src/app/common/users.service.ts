import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers=['max','anna'];
  inactiveUsers=['chris','mark'];
  constructor(private counterservice:CounterService) { }
  setToActive(id:number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counterservice.IncrementActivetoInactive();
    }
    setToInactive(id:number){
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id,1);
      this.counterservice.IncrementInactivetoActive();
    }
}
