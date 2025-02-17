import { Component, Input, OnInit } from '@angular/core';
import { empDocumentsData, treeData } from '../../../data/db';
import { Employee } from '../../_model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-details-employee',
  templateUrl: './view-details-employee.component.html',
  styleUrl: './view-details-employee.component.scss'
})
export class ViewDetailsEmployeeComponent implements OnInit {
  

  @Input() employee!:Employee;

  empDocments = empDocumentsData;
  empTreeData= treeData; 

  displayedColumns : string[] = ['name' , 'uploadedOn' ,  'size' , 'action'];

  constructor(private router : Router){

  }
sendQuickNote() {

}
quickNote: string='';
goBack() {
  this.router.navigate(['/employees']);
}


ngOnInit(): void {
    console.log('====================================');
    console.log("app-view-details-employee");
    console.log(this.employee);
    console.log('====================================');
}
}
