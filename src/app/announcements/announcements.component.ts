import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Announcement, announcements } from './annoucements';
import { AnnoucementComponent } from './annoucement/annoucement.component';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule, AnnoucementComponent],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnnouncementsComponent {
  announcements = this.getCurrentAnnoucements();

  private getCurrentAnnoucements(): Announcement[] {
    const currentDate = new Date();

    return announcements.filter(announcement => {
      const fromDate = announcement.showFromDate
        ? this.convertDate(announcement.showFromDate)
        : null;
      const untilDate = announcement.showUntilDate
        ? this.convertDate(announcement.showUntilDate)
        : null;

      return (!fromDate || fromDate <= currentDate) && (!untilDate || untilDate >= currentDate);
    });
  }

  private convertDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  onAnnouncementClose(closedAnnouncement: Announcement): void {
    console.log('test');
    this.announcements = this.announcements.filter(
      announcement => announcement !== closedAnnouncement,
    );
  }
}
