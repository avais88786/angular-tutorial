import { Component, OnInit, Host, Optional, SkipSelf } from '@angular/core';
import { LeafService } from '../../services/leaf.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  providers: [{ provide: LeafService, useValue: { emoji: '🍁' } }]

})
export class HostComponent implements OnInit {

  constructor(@Host() @Optional() public leaf: LeafService, @SkipSelf() public mainLeaf: LeafService) { }

  ngOnInit() {
  }

}
