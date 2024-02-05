
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { salads } from './salads';
import { PricePipe } from '../pipes/price.pipe';
import { SaladCardComponent } from './salad-card/salad-card.component';

@Component({
  selector: 'app-salads',
  standalone: true,
  templateUrl: './salads.component.html',
  styleUrl: './salads.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SaladCardComponent, PricePipe],
})
export class SaladsComponent {
  readonly salads = salads;
}
