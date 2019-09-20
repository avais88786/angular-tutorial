import { Component, OnInit, Optional, Self } from '@angular/core';
import { LeafService } from '../../services/leaf.service';

@Component({
  selector: 'app-self-no-data',
  templateUrl: './self-no-data.component.html',
  styleUrls: ['./self-no-data.component.scss']
})
export class SelfNoDataComponent implements OnInit {

  constructor(@Optional() @Self() leaf: LeafService) { }

  ngOnInit() {
  }

}
