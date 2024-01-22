import { Component, HostListener, OnInit } from '@angular/core';
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
    const speisekarteElement = document.getElementById('links-grid');
    this.windowScrolled = !this.isInView(speisekarteElement!);
  }

  scrollToTop() {
    const speisekarteElement = document.getElementById('menu');
    if (speisekarteElement) {
      speisekarteElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private isInView(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
