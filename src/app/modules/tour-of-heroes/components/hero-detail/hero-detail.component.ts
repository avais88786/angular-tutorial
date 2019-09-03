import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/Hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private heroService: HeroService) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hh => this.hero = hh);
  }

  goBack(){
    this.location.back();
  }
}
