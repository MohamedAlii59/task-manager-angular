import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { Task } from '../types';

@Component({
  selector: 'Task-card',
  templateUrl: './Task-card.html',
  styleUrl: './Task-card.css',
  imports: [FormsModule, DatePipe, TitleCasePipe],
})
export class Task_card {
  @Input() task: Task = {
    id: '',
    title: '',
    description: '',
    priority: '',
    dueDate: new Date(),
    Category: '',
    tags: '',
    isDone: false,
  };

  @Output() taskChange = new EventEmitter<Task>();
  @Output() taskDelete = new EventEmitter<string>();

  isEditing = false;
  editCopy: Task = { ...this.task };

  startEdit() {
    this.editCopy = { ...this.task };
    this.isEditing = true;
  }

  saveEdit() {
    Object.assign(this.task, this.editCopy);
    this.taskChange.emit(this.task);
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  markDone() {
    this.task.isDone = true;
    this.taskChange.emit(this.task);
  }

  markNotDone() {
    this.task.isDone = false;
    this.taskChange.emit(this.task);
  }

  deleteTask() {
    this.taskDelete.emit(this.task.id);
  }
}
