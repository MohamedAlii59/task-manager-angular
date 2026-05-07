import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, error } from '../types';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'Task-comp',
  templateUrl: './Task-comp.html',
  styleUrl: './Task-comp.css',
  imports: [FormsModule],
})
export class Task_comp {
  @Output() sendTaskToParent = new EventEmitter<Task>();

  task: Task = this.newTask();
  error: error = { message: '', state: false };

  newTask(): Task {
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
    this.error.state = false;
    this.task.id = uuidv4();
    for (let key in this.task) {
      const k = key as keyof Task;
      if (this.task[k] === '') {
        this.error.message = `You must fill the value of ${k}`;
        this.error.state = true;
        return;
      }
    }
    this.sendTaskToParent.emit({ ...this.task });
    this.task = this.newTask();
  }
}
