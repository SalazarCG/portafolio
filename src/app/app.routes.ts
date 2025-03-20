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
    path: 'laliga',
    loadComponent: () =>
      import(
        './portafolio/pages/proyectos-page/pages/video-ligadelajusticia/video-ligadelajusticia.component'
      ),
  },
  {
    path: '**',
    redirectTo: 'principal',
  },
];
