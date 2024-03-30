import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: false
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHero(): void {
    this.name = 'Thor';
    console.log(this.name);
  }

  changeAge(): void {
    this.age = 25;
    console.log(this.age);
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1').forEach((e) => {
    //   e.innerHTML = '<h1>Texto Cambiado</h1>'
    // })

  }
}
