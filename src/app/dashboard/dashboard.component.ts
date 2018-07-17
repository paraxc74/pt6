import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {InfoService} from '../info.service';
import { HeroDBService } from '../hero-db.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, 
    private infoService: InfoService, 
    private heroDBService: HeroDBService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroDBService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }

  getInfo(): string {
    return this.infoService.getInfo();
  }
}
