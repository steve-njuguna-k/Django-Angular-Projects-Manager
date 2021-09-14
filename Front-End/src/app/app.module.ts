import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MembersComponent } from './components/members/members.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddEditMembersComponent } from './components/members/add-edit-members/add-edit-members.component';
import { ShowMembersComponent } from './components/members/show-members/show-members.component';
import { AddEditProjectsComponent } from './components/projects/add-edit-projects/add-edit-projects.component';
import { ShowProjectsComponent } from './components/projects/show-projects/show-projects.component';
import { AddEditTasksComponent } from './components/tasks/add-edit-tasks/add-edit-tasks.component';
import { ShowTasksComponent } from './components/tasks/show-tasks/show-tasks.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddEditCategoriesComponent } from './components/categories/add-edit-categories/add-edit-categories.component';
import { ShowCategoriesComponent } from './components/categories/show-categories/show-categories.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MembersComponent,
    TasksComponent,
    AddEditMembersComponent,
    ShowMembersComponent,
    AddEditProjectsComponent,
    ShowProjectsComponent,
    AddEditTasksComponent,
    ShowTasksComponent,
    CategoriesComponent,
    AddEditCategoriesComponent,
    ShowCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
