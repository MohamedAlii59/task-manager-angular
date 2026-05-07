import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../types';
import { Task_card } from '../Task-Card/Task-card';

@Component({
  selector: 'app-not-done-tasks',
  imports: [Task_card],
  templateUrl: './not-done-tasks.html',
  styleUrl: './not-done-tasks.css',
})
export class NotDoneTasks {
  @Input() notDoneTasks: Task[] = [];
  @Output() onDelete = new EventEmitter<string>();
}
