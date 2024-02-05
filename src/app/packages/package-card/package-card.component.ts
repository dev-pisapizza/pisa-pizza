import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Package } from '../packages';
import { PricePipe } from '../../pipes/price.pipe';


@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [PricePipe],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageCardComponent {
  @Input() package!: Package;
}
