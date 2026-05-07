import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Task_card } from '../Task-Card/Task-card';
import { TasksService } from '../../services/tasks.service';
import { tabName } from '../../types';

@Component({
  selector: 'app-tasks',
  imports: [Task_card],
  templateUrl: './tasks.html',
})
export class Tasks implements OnInit {
  tasksService = inject(TasksService);
  tab = signal<tabName>('all');

  ngOnInit() {
    this.tasksService.loadTasks();
  }

  visibleTasks = computed(() => {
    const t = this.tab();
    if (t === 'done') return this.tasksService.doneTasks();
    if (t === 'not-done') return this.tasksService.notDoneTasks();
    return this.tasksService.tasks();
  });
}
