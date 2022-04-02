import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

interface Task {
  title: string;
  dia: string;
}

@Injectable()
export class TasksService {
  list: Array<Task> = [{ title: 'task', dia: 'segunda' }];
  constructor(public logger: LoggerService) {
    this.logger.add('TasksService constructed');
  }

  getList() {
    return this.list;
  }
  add(title: string, dia: string) {
    this.list.push({ title, dia });
  }
  remove(index: number) {
    this.list.splice(index, 1);
  }
}
