import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnDestroy, OnInit {
  public componentDestroyed: Subject<boolean> = new Subject();

  constructor(private metaTagService: Meta, private titleService: Title) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Wynter Gilbert - Contact');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Wynter Gilbert - Contact',
    });
  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }
}
