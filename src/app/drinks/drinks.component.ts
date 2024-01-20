import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { drinks } from './drinks';
import { PricePipe } from '../pipes/price.pipe';
import { DrinkCardComponent } from './drink-card/drink-card.component';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, DrinkCardComponent, PricePipe],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinksComponent {
  readonly drinks = drinks;
}
