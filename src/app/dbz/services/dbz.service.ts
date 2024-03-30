import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
console.log(uuid())
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    { id: uuid(), name: 'Krilin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 8000 },
    { id: uuid(), name: 'Gohan', power: 8500 },
    { id: uuid(), name: 'Piccolo', power: 3000 },
  ];

  addCharacter(character: Character): void {
    console.log('DBZ Service', character);
    const newCharacter: Character = {
      ...character,
      id: uuid()
    }

    this.characters.push(newCharacter);
  }

  deleteCharacter(index: string): void {
    console.log('index desde DBZ Service', index);
    //this.characters.splice(index, 1);
    this.characters = this.characters.filter(character => character.id !== index)
  }
}
