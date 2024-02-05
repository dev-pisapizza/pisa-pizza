
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Drink } from '../drinks';
import { PricePipe } from '../../pipes/price.pipe';
import { GermanNumberPipe } from '../../pipes/german-number.pipe';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [GermanNumberPipe, PricePipe],
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinkCardComponent {
  @Input() drink!: Drink;
}
