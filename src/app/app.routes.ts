import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home').then(m => m.Home),
  },
  {
    path: 'sobre',
    loadComponent: () => import('./about').then(m => m.About),
  },
  {
    path: 'cursos',
    loadComponent: () => import('./courses').then(m => m.Courses),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contact').then(m => m.Contact),
  },
  {
    path: 'inscricao',
    loadComponent: () => import('./enrollment').then(m => m.Enrollment),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
