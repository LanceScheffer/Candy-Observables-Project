import { Candy } from './../models/candy.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PillowCaseService {
   addCandy = new Subject<Candy[]>();
  // Create a "Subject" that to emit when a new candy is added to bag

  private myCandies: Candy[] = [new Candy('Kit Kat'), new Candy('Pop Rocks')];

  getMySecretStash() {
    return this.myCandies.slice();
  }

  addNewCandy(name: string) {
    this.myCandies.push(new Candy(name));
    this.addCandy.next(this.myCandies)

    console.log('this.myCandies:', this.myCandies);
  }

  clearCandy() {
    this.myCandies = [];
    this.addCandy.next(this.myCandies)
  }
}
