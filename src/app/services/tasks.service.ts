import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../types';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:3000/tasks';

  tasks = signal<Task[]>([]);
  doneTasks = computed(() => this.tasks().filter((t) => t.isDone));
  notDoneTasks = computed(() => this.tasks().filter((t) => !t.isDone));

  loadTasks() {
    this.http.get<Task[]>(this.API).subscribe((data) => this.tasks.set(data));
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.API, task);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(`${this.API}/${task.id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
