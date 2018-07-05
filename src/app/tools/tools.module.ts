import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolDashComponent } from './tool-dash.component';

import { TaskService } from '../services/task.service';
import { TasksComponent } from '../components/tasks/tasks.component';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ToolDashComponent,
  TasksComponent, AddTaskComponent ],
    providers: [
    TaskService
  ],
})
export class ToolsModule { }
