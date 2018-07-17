import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { HeroDBService } from '../hero-db.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  id: string;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private heroDBService: HeroDBService
  ) {}

  ngOnInit(): void {
    this.getDBHero();
  }

  getHero(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.heroDBService.getHero(this.id)
      .subscribe(hero => this.hero = hero);
  }

  getDBHero(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroDBService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
