import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPrice',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (!value) {
      return '-';
    }

    let result = value.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });

    return result;
  }
}
