import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor(public logger: LoggerService) {
    this.logger.add('TimerService constructed');
  }

  start(ms: any) {
    if (this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms * 1000);
    }
  }
  stop() {
    if (!this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  getCount() {
    return this.counter;
  }
}
