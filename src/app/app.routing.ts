import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
    pathMatch: 'full',
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./components/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'projects/kaus',
    loadChildren: () =>
      import('./components/projects/kaus/kaus.module').then(
        (m) => m.KausModule
      ),
    pathMatch: 'full',
  },

  // Otherwise redirect back to Home
  { path: '**', redirectTo: '' },
];

export const RoutingModule = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules,
});
