import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  constructor(private service:SharedService) { }

  TaskList:any=[];

  ModalTitle!:string;
  ActivateAddEditTaskComponent:boolean=false;
  task:any;

  ngOnInit(): void {
    this.refreshTaskList();
  }

  addClick(){
    this.task={
      TaskID:0,
      TaskName:"",
      MemberAllocated:"",
    }
    this.ModalTitle="Add Task";
    this.ActivateAddEditTaskComponent=true;
  }

  editClick(item:any){
    console.log(item);
    this.task=item;
    this.ModalTitle="Edit Task";
    this.ActivateAddEditTaskComponent=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteTask(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshTaskList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTaskComponent=false;
    this.refreshTaskList();
  }

  refreshTaskList(){
    this.service.getAllTasks().subscribe(data=>{
      this.TaskList=data;
    });
  }

}
