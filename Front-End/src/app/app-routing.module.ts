import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { MembersComponent } from './components/members/members.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path:'projects', component:ProjectsComponent},
  {path:'tasks', component:TasksComponent},
  {path:'members', component:MembersComponent},
  {path:'categories', component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
