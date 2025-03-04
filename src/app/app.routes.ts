import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./portafolio/pages/dashboard-page/dashboard-page.component')
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
  
];
