import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { LogComponent } from './log/log.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { TasksService } from './tasks.service';
import { LoggerService } from './logger.service';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ContadorComponent } from './contador/contador.component';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'log', component: LogComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
      { path: 'contador', component: ContadorComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TasksComponent,
    LogComponent,
    DisciplinasComponent,
    ContadorComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, TasksService, LoggerService, DisciplinasService],
})
export class AppModule {}
