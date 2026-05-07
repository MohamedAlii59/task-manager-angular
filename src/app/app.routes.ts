import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AddTask } from './add-task/add-task';
import { AllTasks } from './all-tasks/all-tasks';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Root } from './root/root';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'root', pathMatch: 'full' },
  {
    path: 'root',
    component: Root,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix',
      },
      {
        title: 'home',
        path: 'home',
        component: Home,
      },
      {
        title: 'add task',
        path: 'add-task',
        component: AddTask,
      },
      {
        title: 'All tasks',
        path: 'all-tasks',
        component: AllTasks,
      },
    ],
  },

  {
    title: 'login',
    path: 'login',
    component: Login,
  },
  {
    title: 'signup',
    path: 'signup',
    component: Signup,
  },
  {
    path: '**',
    component: Notfound,
  },
];
