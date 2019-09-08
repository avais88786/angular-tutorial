import { Component, OnInit, Input } from '@angular/core';
import { iAdMetadata } from '../../services/iAdMetadata';

@Component({
  selector: 'app-ad-food',
  templateUrl: './ad-food.component.html',
  styleUrls: ['./ad-food.component.scss']
})
export class AdFoodComponent implements OnInit, iAdMetadata {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
