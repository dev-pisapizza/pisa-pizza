import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AnnouncementsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private readonly router: Router) {}

  isActive(): boolean {
    const url = this.router.url;
    return url === '/pizzas' || url === '/';
  }
}
