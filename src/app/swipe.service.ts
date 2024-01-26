import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwipeService {
  private xDown: number | null = null;
  private yDown: number | null = null;
  private swipeThreshold = 10;

  private swipeLeftSubject = new Subject<void>();
  private swipeRightSubject = new Subject<void>();

  swipeLeft$ = this.swipeLeftSubject.asObservable();
  swipeRight$ = this.swipeRightSubject.asObservable();

  disabled = false;

  constructor(@Inject(DOCUMENT) doc: Document) {
    doc.addEventListener('touchstart', e => {
      if (this.disabled) {
        return;
      }

      this.handleTouchStart(e);
    });

    doc.addEventListener('touchmove', e => {
      if (this.disabled) {
        return;
      }

      this.handleTouchMove(e);
    });
  }

  handleTouchStart(evt: TouchEvent) {
    const firstTouch = evt.touches[0];
    this.xDown = firstTouch.clientX;
    this.yDown = firstTouch.clientY;
  }

  handleTouchMove(evt: TouchEvent) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    // Check if the swipe is long enough
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > this.swipeThreshold) {
      if (xDiff > 0) {
        // Right swipe
        this.swipeRightSubject.next();
      } else {
        // Left swipe
        this.swipeLeftSubject.next();
      }
    }

    this.xDown = null;
    this.yDown = null;
  }
}
