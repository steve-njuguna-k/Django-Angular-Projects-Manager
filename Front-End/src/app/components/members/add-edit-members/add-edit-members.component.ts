import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-members',
  templateUrl: './add-edit-members.component.html',
  styleUrls: ['./add-edit-members.component.css']
})
export class AddEditMembersComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() member:any;
  MemberID!: string;
  MemberName!: string;

  ngOnInit(): void {
    this.MemberID=this.member.MemberID;
    this.MemberName=this.member.MemberName;
  }

  addMember(){
    var data = {
      MemberID:this.MemberID,
      MemberName:this.MemberName};
      this.service.addMember(data).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateMember(){
    var data = {
      MemberID:this.MemberID,
      MemberName:this.MemberName};
      this.service.editMember(data).subscribe(res=>{
      alert(res.toString());
    });
  }

}
