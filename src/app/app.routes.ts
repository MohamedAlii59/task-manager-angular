import { Routes } from '@angular/router';
import { Main } from './layouts/main/main';
import { Auth } from './layouts/auth/auth';
import { Home } from './pages/home/home';
import { AddTask } from './pages/add-task/add-task';
import { Notfound } from './pages/notfound/notfound';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Tasks } from './pages/tasks/tasks';
import { authguardGuard } from './guards/authguard-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: Main,
    canActivate: [authguardGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { title: 'Home', path: 'home', component: Home },
      { title: 'Add Task', path: 'add-task', component: AddTask },
      {
        title: 'Tasks',
        path: 'tasks',
        loadComponent: () => import('./pages/tasks/tasks').then((m) => m.Tasks),
      },
    ],
  },
  {
    path: 'auth',
    component: Auth,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        title: 'Login',
        path: 'login',
        loadComponent: () => import('./pages/login/login').then((m) => m.Login),
      },
      {
        title: 'Sign Up',
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup').then((m) => m.Signup),
      },
    ],
  },
  { path: '**', component: Notfound },
];
