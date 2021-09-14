import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.css']
})
export class AddEditTasksComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() task:any;
  TaskID!:string;
  TaskName!:string;
  MemberAllocated!:string;

  MemberList:any=[];

  ngOnInit(): void {
    this.loadMemberAllocatedList();
  }

  loadMemberAllocatedList(){
    this.service.getAllMembers().subscribe((data:any)=>{
      this.MemberList=data;

      this.TaskID=this.task.TaskID;
      this.TaskName=this.task.TaskName;
      this.MemberAllocated=this.task.MemberAllocated;
    });
  }

  addTask(){
    var data = {
      TaskID:this.TaskID,
      TaskName:this.TaskName,
      MemberAllocated:this.MemberAllocated
    };
    this.service.addTask(data).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTask(){
    var data = {
      TaskID:this.TaskID,
      TaskName:this.TaskName,
      MemberAllocated:this.MemberAllocated
    };

    this.service.editTask(data).subscribe(res=>{
    alert(res.toString());
    });
  }

}
