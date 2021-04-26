/// <reference types="jest" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const metaStub = () => ({ updateTag: (object) => ({}) });
    const titleStub = () => ({ setTitle: (string) => ({}) });
    const activatedRouteStub = () => ({
      data: { pipe: () => ({ subscribe: (f) => f({}) }) },
    });
    const routerStub = () => ({
      events: {
        pipe: () => ({ subscribe: (f) => f({}) }),
      },
      url: {},
      navigateByUrl: (string) => ({}),
    });
    const matDialogStub = () => ({
      open: (logoutDialog) => ({
        afterClosed: () => ({ pipe: () => ({ subscribe: (f) => f({}) }) }),
      }),
    });
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: Meta, useFactory: metaStub },
        { provide: Title, useFactory: titleStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        {
          provide: Router,
          useValue: {
            url: '/path',
          },
          useFactory: routerStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the home', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain(
  //     'levvel-starter-angular home is running!'
  //   );
  // });
});
