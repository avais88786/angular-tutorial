import { Component, OnInit, Input } from '@angular/core';
import { iAdMetadata } from '../../services/iAdMetadata';

@Component({
  selector: 'app-ad-car',
  templateUrl: './ad-car.component.html',
  styleUrls: ['./ad-car.component.scss']
})
export class AdCarComponent implements OnInit, iAdMetadata {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
