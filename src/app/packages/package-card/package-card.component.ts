import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Package } from '../packages';
import { PricePipe } from '../../pipes/price.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [PricePipe, CommonModule],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageCardComponent {
  @Input() package!: Package;
}
