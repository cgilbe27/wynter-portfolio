import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  public componentDestroyed: Subject<boolean> = new Subject();
  public url = '';
  public loading = false;

  constructor(private router: Router) {}

  public ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((event: RouterEvent) => {
        if (event.url) {
          this.url = event.url;
        }

        if (event instanceof NavigationStart) {
          // Show loading indicator
          this.loading = true;
        }

        if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.loading = false;
        }

        if (event instanceof NavigationError) {
          // Hide loading indicator
          this.loading = false;

          console.log('*** Failed Sucessfully ***');
          console.error(event.error);
          console.log('*** Failed Sucessfully ***');
        }
      });
  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }

  public gotoUrl(s: string) {
    this.router.navigateByUrl(s);
  }
}
