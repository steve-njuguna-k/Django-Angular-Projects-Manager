import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-categories',
  templateUrl: './add-edit-categories.component.html',
  styleUrls: ['./add-edit-categories.component.css']
})
export class AddEditCategoriesComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() category:any;
  CategoryID!: string;
  CategoryName!: string;

  ngOnInit(): void {
    this.CategoryID=this.category.CategoryID;
    this.CategoryName=this.category.CategoryName;
  }

  addCategory(){
    var data = {
      CategoryID:this.CategoryID,
      CategoryName:this.CategoryName};
      this.service.addCategory(data).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategory(){
    var data = {
      CategoryID:this.CategoryID,
      CategoryName:this.CategoryName};
      this.service.editCategory(data).subscribe(res=>{
      alert(res.toString());
    });
  }

}
