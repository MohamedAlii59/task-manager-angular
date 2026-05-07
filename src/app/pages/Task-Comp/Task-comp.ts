import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, error } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'Task-comp',
  templateUrl: './Task-comp.html',
  styleUrl: './Task-comp.css',
  imports: [FormsModule],
})
export class Task_comp {
  private tasksService = inject(TasksService);

  task = signal<Task>(this.newTask());
  error = signal<error>({ message: '', state: false });

  private newTask(): Task {
    return {
      id: '',
      title: '',
      description: '',
      priority: '',
      dueDate: new Date(),
      Category: '',
      tags: '',
      isDone: false,
    };
  }

  addTask() {
    this.error.set({ message: '', state: false });
    const t = { ...this.task(), id: uuidv4() };

    for (const key in t) {
      const k = key as keyof Task;
      if (k === 'isDone') continue;
      if (t[k] === '' || t[k] === null) {
        this.error.set({ message: `Please fill in: ${k}`, state: true });
        return;
      }
    }

    this.tasksService.addTask(t).subscribe({
      next: (created) => {
        this.tasksService.tasks.update((list) => [...list, created]);
        this.task.set(this.newTask());
        this.error.set({ message: '', state: false });
      },
      error: () =>
        this.error.set({ message: 'Failed to add task. Is json-server running?', state: true }),
    });
  }
}
