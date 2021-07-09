import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-design-lab',
  templateUrl: './designlab.component.html',
})
export class DesignLabComponent implements OnDestroy, OnInit {
  public componentDestroyed: Subject<boolean> = new Subject();
  public windowScrolled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private metaTagService: Meta,
    private router: Router,
    private titleService: Title
  ) {}

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    if (
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  public ngOnInit(): void {
    this.titleService.setTitle(
      'Wynter Gilbert - Collectibles & Games Case Study'
    );
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Wynter Gilbert - Collectibles & Games Case Study',
    });
  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }

  public gotoUrl(s: string) {
    this.router.navigateByUrl(s);
  }

  public scrollToTop() {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
