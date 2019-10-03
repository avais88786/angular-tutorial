import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crisis } from '../../services/crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.crisis = new Crisis(+map.get('id'), 'Gibber Jabber');
    })
  }

}
