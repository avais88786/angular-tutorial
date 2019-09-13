import { Component, OnInit } from '@angular/core';
import { HeroService } from '@services/hero.service';
import { SuperHero } from '../../models/Hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  hero: SuperHero = this.heroService.getRandomHero();

  constructor(private heroService: HeroService) {
        this.hero.superpower = this.powers[0];
  }

  ngOnInit() {
  }

  onSubmit() {
  }

  get diagnostic(): string {
    return JSON.stringify(this.hero);
  }

}
