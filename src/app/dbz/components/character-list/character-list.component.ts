import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacter=new EventEmitter<string>();

  deleteCharacter(id?: string):void{
    console.log({id})
    if(!id) return
    this.onDeleteCharacter.emit(id)
  }
}
