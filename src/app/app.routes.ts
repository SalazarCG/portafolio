import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'principal',
    loadComponent: () =>
      import('./portafolio/pages/principal-page/principal-page.component'),
  },
  {
    path: '**',
    redirectTo: 'principal',
  },
];
