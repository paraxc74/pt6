import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDBService } from '../hero-db.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  currentStyles: {};

  constructor(private heroService: HeroService, private heroDBService: HeroDBService) { }

  ngOnInit() {
    this.getHeroes();
    this.setCurrentStyles();
  }

  getHeroes(): void {
    this.heroDBService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroDBService.addHero({ name } as Hero)
      .subscribe();
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroDBService.deleteHero(hero).subscribe();
  }


  setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'background-color':  false      ? 'red' : 'white'
  };
}

}
