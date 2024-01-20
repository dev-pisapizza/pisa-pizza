import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Salad } from '../salads';
import { PricePipe } from '../../pipes/price.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salad-card',
  standalone: true,
  imports: [PricePipe, CommonModule],
  templateUrl: './salad-card.component.html',
  styleUrl: './salad-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaladCardComponent {
  @Input() salad!: Salad;
}
