import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectsComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProjectList:any=[];

  ModalTitle!: string;
  ActivateAddEditProjectComponent:boolean=false;
  project:any;

  ngOnInit(): void {
    this.refreshProjectList();
  }

  addClick(){
    this.project={
      ProjectID:0,
      ProjectName:""
    }
    this.ModalTitle="Add Project";
    this.ActivateAddEditProjectComponent=true;

  }

  editClick(item:any){
    this.project=item;
    this.ModalTitle="Edit Project";
    this.ActivateAddEditProjectComponent=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteProject(item.ProjectID).subscribe(data=>{
        alert(data.toString());
        this.refreshProjectList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProjectComponent=false;
    this.refreshProjectList();
  }

  refreshProjectList(){
    this.service.getAllProjects().subscribe(data=>{
      this.ProjectList=data;
    });
  }

}
