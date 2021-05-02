import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-kaus',
  templateUrl: './kaus.component.html',
})
export class KausComponent implements OnDestroy, OnInit {
  public componentDestroyed: Subject<boolean> = new Subject();

  constructor(
    private metaTagService: Meta,
    private router: Router,
    private titleService: Title
  ) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Wynter Gilbert - Kaus Case Study');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Wynter Gilbert - Kaus Case Study',
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
