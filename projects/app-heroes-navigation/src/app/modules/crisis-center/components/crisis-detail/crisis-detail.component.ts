import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crisis } from '../../services/crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(map => {
    //   if (this.router.getCurrentNavigation()) {
    //     this.crisis = new Crisis(+map.get('id'), this.router.getCurrentNavigation().extras.state.data);
    //   }
    // });

    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.crisis = data.crisis;
    });

  }

}
