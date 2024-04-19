import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../interfaces/animal.interface';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(value: Animal[], sortBy?: keyof Animal | ''): Animal[] {
    switch (sortBy) {
      case 'name':
        return value.sort((a,b)=> (a.name > b.name) ? 1 : -1);
      case 'canFly':
        return value.sort((a,b)=> (a.canFly > b.canFly) ? 1 : -1);
      case 'color':
        return value.sort((a,b)=> (a.color > b.color) ? 1 : -1);
      default:
        return value;
    }
  }
}
