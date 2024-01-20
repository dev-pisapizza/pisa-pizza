import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const route = new URLSearchParams(window.location.search).get('route');

    if (route) {
      this.router.navigateByUrl(`/${route}`);
    }
  }

  isActive(): boolean {
    const url = this.router.url;
    return url === '/packages' || url === '/';
  }
}
