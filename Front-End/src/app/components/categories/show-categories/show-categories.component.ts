import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any=[];

  ModalTitle!: string;
  ActivateAddEditCategoryComponent:boolean=false;
  category:any;

  ngOnInit(): void {
    this.refreshCategoryList();
  }

  addClick(){
    this.category={
      CategoryID:0,
      CategoryName:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCategoryComponent=true;

  }

  editClick(item:any){
    this.category=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCategoryComponent=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteCategory(item.CategoryID).subscribe(data=>{
        alert(data.toString());
        this.refreshCategoryList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCategoryComponent=false;
    this.refreshCategoryList();
  }

  refreshCategoryList(){
    this.service.getAllCategories().subscribe(data=>{
      this.CategoryList=data;
    });
  }

}
