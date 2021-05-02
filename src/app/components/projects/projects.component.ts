import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnDestroy, OnInit {
  public componentDestroyed: Subject<boolean> = new Subject();

  constructor(
    private metaTagService: Meta,
    private router: Router,
    private titleService: Title
  ) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Wynter Gilbert - Projects');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Wynter Gilbert - Projects',
    });
    this.router.navigateByUrl('');
  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }

  public gotoUrl(s: string) {
    this.router.navigateByUrl(s);
  }
}
