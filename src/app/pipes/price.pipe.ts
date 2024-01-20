import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPrice',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform(
    value: number | null | undefined,
    wrapInUnderLine?: boolean
  ): string {
    if (!value) {
      return '-';
    }

    let result = value.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });

    if (wrapInUnderLine) {
      result = `<u>${result}</u>`;
    }

    return result;
  }
}
