import { Component, OnInit, Self, Host, SkipSelf } from '@angular/core';
import { FlowerService } from '../../services/flower.service';

@Component({
  selector: 'app-self-data',
  templateUrl: './self-data.component.html',
  styleUrls: ['./self-data.component.scss'],
  providers: [{provide: FlowerService, useValue: {emoji : '🌼'}}]
})
export class SelfDataComponent implements OnInit {

  constructor(@Self() public flower: FlowerService, @SkipSelf() public mainFlower: FlowerService) { }

  ngOnInit() {
  }

}
