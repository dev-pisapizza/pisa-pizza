import { ChangeDetectionStrategy, Component } from '@angular/core';
import { packages } from './packages';

import { PricePipe } from '../pipes/price.pipe';
import { PackageCardComponent } from './package-card/package-card.component';

@Component({
  selector: 'app-packages',
  templateUrl: 'packages.component.html',
  styleUrl: './packages.component.css',
  standalone: true,
  imports: [PricePipe, PackageCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackagesComponent {
  readonly packages = packages;
}
