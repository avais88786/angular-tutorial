import { Component, OnInit, Optional } from '@angular/core';
import { Base } from '../nav-parent/nav-parent.component';

@Component({
  selector: 'app-nav-child2',
  templateUrl: './nav-child2.component.html',
  styleUrls: ['./nav-child2.component.scss']
})
export class NavChild2Component implements OnInit {

  constructor(@Optional() public parent: Base) { }

  ngOnInit() {
  }

}
