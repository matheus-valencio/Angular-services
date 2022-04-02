import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor() {}

  start(ms: any) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms * 1000);
    }
  }
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  clear() {
    this.timer = null;
    this.counter = 0;
  }
  getCount() {
    return this.counter;
  }
}
