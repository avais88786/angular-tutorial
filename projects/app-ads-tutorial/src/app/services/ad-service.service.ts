import { Injectable } from '@angular/core';
import { AdItem } from '../models/ad-Item';
import { AdCarComponent } from '../components/ad-car/ad-car.component';
import * as casual from 'casual';
import { AdFoodComponent } from '../components/ad-food/ad-food.component';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {

  constructor() { }

  getAds(): AdItem[] {
    return [
      {
        component: AdCarComponent,
        data: {name: `Toyota-${casual.word}`, descirption: casual.sentence}
      },
      {
        component: AdCarComponent,
        data: {name: `BMW-${casual.word}`, descirption: casual.sentence}
      },
      {
        component: AdCarComponent,
        data: {name: `Ford-${casual.word}`, descirption: casual.sentence}
      },
      {
        component: AdFoodComponent,
        data: {name: `Food-${casual.word}`, steps: casual.array_of_words(7)}
      },
      {
        component: AdFoodComponent,
        data: {name: `Food-${casual.word}`, steps: casual.array_of_words(5)}
      }
    ];
  }
}
