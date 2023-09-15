import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 800
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 2000
        },
        {
            id: uuid(),
            name: 'Veggeta',
            power: 1500
        },
    ]

    addCharacter(character: Character): void {
        this.characters.push({ id: uuid(), ...character })
    }

    deleteCharacterById(id: string): void {
        this.characters = this.characters.filter(c => c.id !== id)
    }
}