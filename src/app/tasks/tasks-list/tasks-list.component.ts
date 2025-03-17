import { Component, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  //Injecting TaskService
  // 1 way
  // constructor(private taskService:TasksService){}
  //Injecting TaskService
  // 2 way
  private taskService = inject(TasksService);
  selectedFilter = signal<string>('all');
  tasks = [];

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
