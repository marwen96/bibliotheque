import { Livre } from './app/livre';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Livre[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) {return items; }
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.title.toLowerCase().includes(searchText);
    });
   }
}
