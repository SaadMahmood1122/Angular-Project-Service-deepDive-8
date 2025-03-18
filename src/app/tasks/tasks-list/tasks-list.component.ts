import { Component, computed, inject, signal } from '@angular/core';

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
  // Injecting TaskService
  private taskService = inject(TasksService);
  selectedFilter = signal<string>('all');
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'OPEN':
        return this.taskService
          .allTask()
          .filter((task) => task.status === 'OPEN');
      case 'IN_PROGRESS':
        return this.taskService
          .allTask()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'DONE':
        return this.taskService
          .allTask()
          .filter((task) => task.status === 'DONE');
      default:
        return this.taskService.allTask(); // For 'all' and any other case
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
