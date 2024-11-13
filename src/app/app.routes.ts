import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : 'login',
    loadComponent: () => import('./components/auth/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path : 'forgot-password',
    loadComponent: () => import('./components/auth/forgot-password/forgot-password.component')
      .then(m => m.ForgotPasswordComponent)
  },
];
