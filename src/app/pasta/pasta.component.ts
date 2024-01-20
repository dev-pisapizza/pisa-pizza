import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PricePipe } from '../pipes/price.pipe';
import { pastas } from './pastas';
import { PastaCardComponent } from './pasta-card/pasta-card.component';

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [CommonModule, PricePipe, PastaCardComponent],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PastaComponent {
  readonly pastas = pastas;
}
