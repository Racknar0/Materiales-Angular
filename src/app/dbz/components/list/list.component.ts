import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public OnDelete : EventEmitter<string> = new EventEmitter;

  onDeleteCharacter (index: string | undefined) : void {
    //Emitir el id del personaje
    this.OnDelete.emit(index)
  }

}
