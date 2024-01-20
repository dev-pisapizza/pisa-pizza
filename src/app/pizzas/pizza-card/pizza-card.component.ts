import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pizza } from '../pizzas';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [CommonModule, PricePipe],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaCardComponent {
  @Input() pizza!: Pizza;
}
