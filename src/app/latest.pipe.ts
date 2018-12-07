
import { Pipe, PipeTransform } from '@angular/core';
import { Livre } from './livre';
@Pipe({
  name: 'latest'
})
export class FilterPipe implements PipeTransform {
  transform(items: Livre[], year: number): any[] {
    if (!items) { return []; }
return items.filter( it => {
      return it.title.toLowerCase().includes(searchText);
    });
   }
}
