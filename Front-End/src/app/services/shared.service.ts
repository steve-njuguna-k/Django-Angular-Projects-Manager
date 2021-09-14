import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  ///ProjectAPI
  getAllProjects():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/v1/projects/');
  }
  addProject(data:any){
    return this.http.post(this.APIUrl + '/api/v1/projects/', data);
  }
  editProject(data:any){
    return this.http.put(this.APIUrl + '/api/v1/projects/', data);
  }
  deleteProject(data:any){
    return this.http.delete(this.APIUrl + '/api/v1/projects/' + data);
  }

  ///TasksAPI
  getAllTasks():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/v1/tasks/');
  }
  addTask(data:any){
    return this.http.post(this.APIUrl + '/api/v1/tasks/', data);
  }
  editTask(data:any){
    return this.http.put(this.APIUrl + '/api/v1/tasks/', data);
  }
  deleteTask(data:any){
    return this.http.delete(this.APIUrl + '/api/v1/tasks/' + data);
  }

  ///CategoriesAPI
  getAllCategories():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/v1/categories/');
  }
  addCategory(data:any){
    return this.http.post(this.APIUrl + '/api/v1/categories/', data);
  }
  editCategory(data:any){
    return this.http.put(this.APIUrl + '/api/v1/categories/', data);
  }
  deleteCategory(data:any){
    return this.http.delete(this.APIUrl + '/api/v1/categories/' + data);
  }

  ///MembersAPI
  getAllMembers():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/v1/members/');
  }
  addMember(data:any){
    return this.http.post(this.APIUrl + '/api/v1/members/', data);
  }
  editMember(data:any){
    return this.http.put(this.APIUrl + '/api/v1/members/', data);
  }
  deleteMember(data:any){
    return this.http.delete(this.APIUrl + '/api/v1/members/' + data);
  }
}
