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
  {
    path: 'projects/collectibles',
    loadChildren: () =>
      import('./components/projects/collectibles/collectibles.module').then(
        (m) => m.CollectiblesModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'projects/design-lab',
    loadChildren: () =>
      import('./components/projects/designlab/designlab.module').then(
        (m) => m.DesignLabModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'projects/watch-list',
    loadChildren: () =>
      import('./components/projects/watchlist/watchlist.module').then(
        (m) => m.WatchlistModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'projects/ontrak',
    loadChildren: () =>
      import('./components/projects/ontrak/ontrak.module').then(
        (m) => m.OntrakModule
      ),
    pathMatch: 'full',
  },

  // Otherwise redirect back to Home
  { path: '**', redirectTo: '' },
];

export const RoutingModule = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
});
