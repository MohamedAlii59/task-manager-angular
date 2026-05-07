import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task_card } from '../Task-Card/Task-card';
import { Task_comp } from '../Task-Comp/Task-comp';
import { Task_list } from '../Task-List/Task-list';
import { Header_comp } from '../Header-Comp/Header-comp';
import { Footer_comp } from '../Footer-Comp/Footer-comp';
import { Carousel } from '../Carousel/Carousel';
import { Task } from '../types';
@Component({
  selector: 'app-home',
  imports: [Task_card, Task_comp, Task_list, Header_comp, Footer_comp, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  taskList: Task[] = [];
  addToTaskList(task: Task) {
    this.taskList.push(task);
  }
}
