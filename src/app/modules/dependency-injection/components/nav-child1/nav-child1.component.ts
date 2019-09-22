import { Component, OnInit, Optional } from '@angular/core';
import { NavParentComponent } from '../nav-parent/nav-parent.component';

@Component({
  selector: 'app-nav-child1',
  templateUrl: './nav-child1.component.html',
  styleUrls: ['./nav-child1.component.scss']
})
export class NavChild1Component implements OnInit {

  constructor(@Optional() public parent: NavParentComponent) { }

  ngOnInit() {
  }

}
