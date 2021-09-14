import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.css']
})
export class ShowMembersComponent implements OnInit {

  constructor(private service:SharedService) { }

  MemberList:any=[];

  ModalTitle!: string;
  ActivateAddEditMemberComponent:boolean=false;
  member:any;

  ngOnInit(): void {
    this.refreshMemberList();
  }

  addClick(){
    this.member={
      MemberID:0,
      MemberName:""
    }
    this.ModalTitle="Add Member";
    this.ActivateAddEditMemberComponent=true;

  }

  editClick(item:any){
    this.member=item;
    this.ModalTitle="Edit Member";
    this.ActivateAddEditMemberComponent=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteMember(item.MemberID).subscribe(data=>{
        alert(data.toString());
        this.refreshMemberList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditMemberComponent=false;
    this.refreshMemberList();
  }

  refreshMemberList(){
    this.service.getAllMembers().subscribe(data=>{
      this.MemberList=data;
    });
  }

}
