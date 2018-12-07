
import { Pipe, PipeTransform } from '@angular/core';
import { Livre } from './livre';
@Pipe({
  name: 'latest'
})
export class LatestPipe implements PipeTransform {
  transform(items: Livre[], year: string , datelivre: String): Livre[] {
    if (!items) { return []; }
return items.filter( it => {
      return datelivre.includes(year);
    });
   }
}
