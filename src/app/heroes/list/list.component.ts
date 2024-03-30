import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {

  public heroesNames : string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk']
  public deletedHero?: string;

  removeLastHero( ) : void {
    this.deletedHero = this.heroesNames.pop()
  }

}
