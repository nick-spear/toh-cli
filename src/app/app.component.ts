import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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
  <div *ngIf="selectedHero" class="col-xs-6">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
  </div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
