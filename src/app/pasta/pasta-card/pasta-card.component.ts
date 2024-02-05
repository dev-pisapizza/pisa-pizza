import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pasta } from '../pastas';
import { PricePipe } from '../../pipes/price.pipe';


@Component({
  selector: 'app-pasta-card',
  standalone: true,
  imports: [PricePipe],
  templateUrl: './pasta-card.component.html',
  styleUrl: './pasta-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PastaCardComponent {
  @Input() pasta!: Pasta;
}
