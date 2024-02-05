import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Salad } from '../salads';
import { PricePipe } from '../../pipes/price.pipe';


@Component({
  selector: 'app-salad-card',
  standalone: true,
  imports: [PricePipe],
  templateUrl: './salad-card.component.html',
  styleUrl: './salad-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaladCardComponent {
  @Input() salad!: Salad;
}
