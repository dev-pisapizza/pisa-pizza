import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appGermanNumber',
  standalone: true,
})
export class GermanNumberPipe implements PipeTransform {
  transform(value: number): unknown {
    return value.toString().replace('.', ',');
  }
}
