import { Component, Input } from '@angular/core';
import { Task_card } from '../Task-Card/Task-card';
import { tabName, Task } from '../types';
import { AllTasks } from '../all-tasks/all-tasks';
import { DoneTasks } from '../done-tasks/done-tasks';
import { NotDoneTasks } from '../not-done-tasks/not-done-tasks';

@Component({
  selector: 'Task-list',
  templateUrl: './Task-list.html',
  styleUrl: './Task-list.css',
  imports: [Task_card, AllTasks, DoneTasks, NotDoneTasks],
})
export class Task_list {
  tab: tabName = 'all';
  @Input() taskListInChild: Task[] = [];

  get doneTasks(): Task[] {
    return this.taskListInChild.filter((t) => t.isDone);
  }

  get notDoneTasks(): Task[] {
    return this.taskListInChild.filter((t) => !t.isDone);
  }

  deleteTask(id: string) {
    const idx = this.taskListInChild.findIndex((t) => t.id === id);
    if (idx !== -1) this.taskListInChild.splice(idx, 1);
  }
}
