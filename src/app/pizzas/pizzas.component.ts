
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pizzas } from './pizzas';
import { PricePipe } from '../pipes/price.pipe';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';

@Component({
  selector: 'app-pizzas',
  standalone: true,
  imports: [PricePipe, PizzaCardComponent],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasComponent {
  pizzas = pizzas;
}
