import { Component, OnInit, Optional } from '@angular/core';
import { Parent } from '../nav-parent/nav-parent.component';

@Component({
  selector: 'app-nav-child3',
  templateUrl: './nav-child3.component.html',
  styleUrls: ['./nav-child3.component.scss']
})
export class NavChild3Component implements OnInit {

  constructor(@Optional() public parent: Parent) { }

  ngOnInit() {
  }

}
