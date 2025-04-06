import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'principal',
    loadComponent: () =>
      import('./portafolio/pages/principal-page/principal-page.component'),
  },
  {
    path: 'futbol',
    loadComponent: () =>
      import(
        './portafolio/pages/proyectos-page/pages/video-futbolmanagerpro/video-futbolmanagerpro.component'
      ),
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import(
        './portafolio/pages/proyectos-page/pages/proyectos-backend/proyectos-backend.component'
      ),
  },
  {
    path: '**',
    redirectTo: 'principal',
  },
];
