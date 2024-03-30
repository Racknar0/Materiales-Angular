import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter {{counter}}</h3>

    <button (click)="aumentar(2)">+1</button>
    <button (click)="disminuir(2)">-1</button>
    <button (click)="reset(10)">Reset Counter</button>
  `
})

export class CounterComponent {


  public counter : number = 10;

  aumentar(value : number): void {
    this.counter += value;
  }

  disminuir(value: number): void {
    this.counter -= value;
  }

  reset(resetValue: number): void {
    this.counter = resetValue;
  }

}
