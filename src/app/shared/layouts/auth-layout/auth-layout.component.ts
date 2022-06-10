import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document) {}

  ngOnInit(): void {
    this.document.body.classList.add('auth-session');
    // this._document.body.style.background = '#fff';
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('auth-session');
  }

  onActivate(event): void {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 20);
  }
}
