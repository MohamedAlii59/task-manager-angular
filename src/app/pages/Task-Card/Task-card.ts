import { Component, Input, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { Task } from '../../types';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'Task-card',
  templateUrl: './Task-card.html',
  styleUrl: './Task-card.css',
  imports: [FormsModule, DatePipe, TitleCasePipe],
})
export class Task_card {
  @Input() task!: Task;

  private tasksService = inject(TasksService);

  isEditing = signal(false);
  editCopy = signal<Task>({ ...this.task });

  startEdit() {
    this.editCopy.set({ ...this.task });
    this.isEditing.set(true);
  }

  saveEdit() {
    this.tasksService.updateTask(this.editCopy()).subscribe({
      next: (updated) => {
        this.tasksService.tasks.update((list) =>
          list.map((t) => (t.id === updated.id ? updated : t))
        );
        this.isEditing.set(false);
      },
    });
  }

  cancelEdit() {
    this.isEditing.set(false);
  }

  markDone() {
    const updated = { ...this.task, isDone: true };
    this.tasksService.updateTask(updated).subscribe({
      next: (res) =>
        this.tasksService.tasks.update((list) =>
          list.map((t) => (t.id === res.id ? res : t))
        ),
    });
  }

  markNotDone() {
    const updated = { ...this.task, isDone: false };
    this.tasksService.updateTask(updated).subscribe({
      next: (res) =>
        this.tasksService.tasks.update((list) =>
          list.map((t) => (t.id === res.id ? res : t))
        ),
    });
  }

  deleteTask() {
    this.tasksService.deleteTask(this.task.id).subscribe({
      next: () =>
        this.tasksService.tasks.update((list) =>
          list.filter((t) => t.id !== this.task.id)
        ),
    });
  }
}
