import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `    
  <h1 class="text-center">{{title}}</h1>
  <div class="col-xs-6">
    <ul class="list-group">
      <li *ngFor="let hero of heroes" class="list-group-item"
          
          [class.list-group-item-info]="hero === selectedHero" 
          (click)="onSelect(hero)">
        {{hero.name}} <span class="badge">{{hero.id}}</span>
      </li>
    </ul>
  </div>
  <hero-detail [hero]="selectedHero"></hero-detail>  
  `,
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor( private heroService: HeroService ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
