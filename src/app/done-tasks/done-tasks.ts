import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../types';
import { Task_card } from '../Task-Card/Task-card';

@Component({
  selector: 'app-done-tasks',
  imports: [Task_card],
  templateUrl: './done-tasks.html',
  styleUrl: './done-tasks.css',
})
export class DoneTasks {
  @Input() doneTasks: Task[] = [];
  @Output() onDelete = new EventEmitter<string>();
}
