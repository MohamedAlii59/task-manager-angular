import { Component } from '@angular/core';
import { Task_comp } from '../Task-Comp/Task-comp';

@Component({
  selector: 'app-add-task',
  imports: [Task_comp],
  template: '<Task-comp />',
})
export class AddTask {}
