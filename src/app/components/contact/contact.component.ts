import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnDestroy, OnInit {
  public name = '';
  public subject = '';
  public body = '';
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

  public onChangeName(e: Event): void {
    this.name = encodeURIComponent((e.target as HTMLInputElement).value);
  }

  public onChangeSubject(e: Event): void {
    this.subject = encodeURIComponent((e.target as HTMLInputElement).value);
  }

  public onChangeBody(e: Event): void {
    this.body = encodeURIComponent((e.target as HTMLTextAreaElement).value);
  }

  public getAttr(): string {
    return `mailto:wkgilbert95@gmail.com?subject=${this.subject}&body=${this.name}%0A${this.body}`;
  }
}
