import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { SwipeService } from './swipe.service';

// Disable right click.
window.addEventListener('contextmenu', e => e.preventDefault());

const routes = ['pizzas', 'pasta', 'salads', 'packages', 'drinks'];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AnnouncementsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  windowScrolled = false;
  constructor(
    private readonly router: Router,
    private readonly swipeService: SwipeService,
  ) {}

  ngOnInit(): void {
    const route = new URLSearchParams(window.location.search).get('route');

    if (route) {
      this.router.navigateByUrl(`/${route}`);
    }

    this.swipeService.swipeRight$.subscribe(() => this.onLeftSwipe());
    this.swipeService.swipeLeft$.subscribe(() => this.onRightSwipe());
  }

  onLeftSwipe() {
    const nextRoute = this.getNextRoute();

    if (nextRoute) {
      this.router.navigateByUrl(`/${nextRoute}`);
      this.scrollToTop('outlet-start', 'instant');
    }
  }

  onRightSwipe() {
    const prevRoute = this.getPrevRoute();

    if (prevRoute) {
      this.router.navigateByUrl(`/${prevRoute}`);
      this.scrollToTop('outlet-start', 'instant');
    }
  }

  private getPrevRoute(): string {
    let currentRouteIndex = this.getCurrentRouteIndex();

    if (currentRouteIndex === 0) {
      currentRouteIndex = routes.length;
    }

    return routes[(currentRouteIndex - 1) % routes.length];
  }

  private getNextRoute(): string {
    const currentRouteIndex = this.getCurrentRouteIndex();

    console.log((currentRouteIndex + 1) % routes.length);
    return routes[(currentRouteIndex + 1) % routes.length];
  }

  private getCurrentRouteIndex() {
    const currentRoute = /\/([^\/]*)$/.exec(window.location.pathname)![1];
    const currentRouteIndex = routes.indexOf(currentRoute);

    return currentRouteIndex;
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

  scrollToTop(elementId: string, scrollBehavior: 'smooth' | 'instant') {
    const menuElement = document.getElementById(elementId);
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
    }
  }

  isElementAboveCurrentView(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return rect.bottom < 0;
  }
}
