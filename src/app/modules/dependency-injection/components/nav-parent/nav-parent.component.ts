import { Component, OnInit, forwardRef } from '@angular/core';

export abstract class Base { }

export abstract class Parent { }

@Component({
  selector: 'app-nav-parent',
  templateUrl: './nav-parent.component.html',
  styleUrls: ['./nav-parent.component.scss'],
  providers: [{provide: Parent, useExisting: forwardRef(() => NavParentComponent)}]
})
export class NavParentComponent extends Base implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
