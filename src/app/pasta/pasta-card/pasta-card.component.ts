import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pasta } from '../pastas';
import { PricePipe } from '../../pipes/price.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pasta-card',
  standalone: true,
  imports: [PricePipe, CommonModule],
  templateUrl: './pasta-card.component.html',
  styleUrl: './pasta-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PastaCardComponent {
  @Input() pasta!: Pasta;
}
