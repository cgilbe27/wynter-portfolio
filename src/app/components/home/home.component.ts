import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy, OnInit {
  public componentDestroyed: Subject<boolean> = new Subject();

  constructor(
    private metaTagService: Meta,
    private router: Router,
    private titleService: Title
  ) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Wynter Gilbert - Home');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Wynter Gilbert - Home',
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
