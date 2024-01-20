import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Announcement } from '../annoucements';

@Component({
  selector: 'app-annoucement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annoucement.component.html',
  styleUrl: './annoucement.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnnoucementComponent {
  @Input() announcement!: Announcement;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
