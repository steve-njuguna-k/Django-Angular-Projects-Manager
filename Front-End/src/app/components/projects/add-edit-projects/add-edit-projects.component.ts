import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-projects',
  templateUrl: './add-edit-projects.component.html',
  styleUrls: ['./add-edit-projects.component.css']
})
export class AddEditProjectsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() project:any;
  ProjectID!:string;
  ProjectName!:string;
  ProjectCategory!:string;
  Budget!:string;
  MemberAllocated!:string;
  DueBy!:string;

  CategoryList:any=[];
  MemberList:any=[];

  ngOnInit(): void {
    this.ProjectID=this.project.ProjectID;
    this.ProjectName=this.project.ProjectName;
    this.ProjectCategory=this.project.ProjectCategory;
    this.Budget=this.project.Budget;
    this.MemberAllocated=this.project.MemberAllocated;
    this.DueBy=this.project.DueBy;

    this.loadCategoryList();
    this.loadMemberList();
  }

  loadCategoryList(){
    this.service.getAllCategories().subscribe((data:any)=>{
      this.CategoryList=data;
    });
  }

  loadMemberList(){
    this.service.getAllMembers().subscribe((data:any)=>{
      this.MemberList=data;
    });
  }

  addProject(){
    var data = {
      ProjectID:this.ProjectID,
      ProjectName:this.ProjectName,
      ProjectCategory:this.ProjectCategory,
      Budget:this.Budget,
      MemberAllocated:this.MemberAllocated,
      DueBy:this.DueBy
    };

    this.service.addProject(data).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateProject(){
    var data = {
      ProjectID:this.ProjectID,
      ProjectName:this.ProjectName,
      ProjectCategory:this.ProjectCategory,
      Budget:this.Budget,
      MemberAllocated:this.MemberAllocated,
      DueBy:this.DueBy
    }

    this.service.editProject(data).subscribe(res=>{
    alert(res.toString());
    });
  }

}
