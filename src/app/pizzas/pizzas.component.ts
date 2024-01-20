import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pizzas } from './pizzas';
import { PricePipe } from '../pipes/price.pipe';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';

@Component({
  selector: 'app-pizzas',
  standalone: true,
  imports: [CommonModule, PricePipe, PizzaCardComponent],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasComponent {
  pizzas = pizzas;
}
