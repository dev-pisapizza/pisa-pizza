import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { SwipeService } from './swipe.service';
import { filter } from 'rxjs';

// Disable right click.
window.addEventListener('contextmenu', e => e.preventDefault());

const routes = ['pizzas', 'pasta', 'salads', 'packages', 'drinks'];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, AnnouncementsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  windowScrolled = false;
  currentUrl = '';

  constructor(
    private readonly router: Router,
    private readonly swipeService: SwipeService,
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      // Update your active link logic
      this.currentUrl = event.urlAfterRedirects;
    });
  }

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
      this.scrollToElement('outlet-start', 'auto');
    }
  }

  onRightSwipe() {
    const prevRoute = this.getPrevRoute();

    if (prevRoute) {
      this.router.navigateByUrl(`/${prevRoute}`);
      this.scrollToElement('outlet-start', 'auto');
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

    return routes[(currentRouteIndex + 1) % routes.length];
  }

  private getCurrentRouteIndex() {
    const currentRoute = /\/([^\/]*)$/.exec(window.location.pathname)![1];
    const currentRouteIndex = routes.indexOf(currentRoute);

    return currentRouteIndex;
  }

  isActive(...routes: string[]): boolean {
    return routes.includes(this.currentUrl);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const linksElement = document.getElementById('phone-number-top');
    this.windowScrolled = this.isElementAboveCurrentView(linksElement!);
  }

  scrollToElement(elementId: string, scrollBehavior: 'smooth' | 'auto', offset: number = 0) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: scrollBehavior,
      });
    }
  }

  isElementAboveCurrentView(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return rect.bottom < 0;
  }

  call(phoneNumber: string): void {
    // Erstellt das <a> Element mit dem Telefonlink
    const telLink = document.createElement('a');
    telLink.href = `tel:${phoneNumber}`;
    telLink.style.display = 'none'; // Versteckt das Element

    // Fügt das Element zum DOM hinzu
    document.body.appendChild(telLink);

    // Klickt auf das <a> Element
    telLink.click();

    // Entfernt das Element nach dem Klick
    document.body.removeChild(telLink);
  }

  scrollAndNavigate(route: string): void {
    this.scrollToElement('menu', 'smooth', 50);

    this.router.navigateByUrl(route);
  }
}
