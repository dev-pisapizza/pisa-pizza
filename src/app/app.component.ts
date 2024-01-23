import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';

// Disable right click.
window.addEventListener('contextmenu', e => e.preventDefault());

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AnnouncementsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  windowScrolled = false;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const route = new URLSearchParams(window.location.search).get('route');

    if (route) {
      this.router.navigateByUrl(`/${route}`);
    }
  }

  isActive(): boolean {
    const url = this.router.url;
    return url === '/pizzas' || url === '/';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const linksElement = document.getElementById('links-grid');
    this.windowScrolled = this.isElementAboveCurrentView(linksElement!);
  }

  scrollToTop() {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isElementAboveCurrentView(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return rect.bottom < 0;
  }
}
