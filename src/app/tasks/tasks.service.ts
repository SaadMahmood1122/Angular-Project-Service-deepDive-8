import { Injectable, inject, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../log.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private task = signal<Task[]>([]);
  // form out side serice it will only read will not able to add task
  allTask = this.task.asReadonly();

  //injecting another service
  private logService = inject(LoggingService);
  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.task.update((oldeTask) => [...oldeTask, newTask]);
    this.logService.log('Task Added ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.task.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.logService.log('Task statusg Updated to ' + newStatus);
  }
}
