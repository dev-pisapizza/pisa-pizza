import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Announcement } from '../announcements';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnnouncementComponent {
  @Input() announcement!: Announcement;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
