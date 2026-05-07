import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task_card } from './Task-Card/Task-card';
import { Task_comp } from './Task-Comp/Task-comp';
import { Task_list } from './Task-List/Task-list';
import { Header_comp } from './Header-Comp/Header-comp';
import { Footer_comp } from './Footer-Comp/Footer-comp';
import { Carousel } from './Carousel/Carousel';
import { Task } from './types';
import { Login } from './login/login';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [
    Task_card,
    Task_comp,
    Task_list,
    Header_comp,
    Footer_comp,
    Carousel,
    Login,
    Signup,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
