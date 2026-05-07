import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../types';
import { Task_card } from '../Task-Card/Task-card';

@Component({
  selector: 'app-all-tasks',
  imports: [Task_card],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {
  @Input() allTasks: Task[] = [];
  @Output() onDelete = new EventEmitter<string>();
}
