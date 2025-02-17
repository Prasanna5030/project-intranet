import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


export interface HrPolices{
  name:string,
  UploadedOn : string,
  size: number
}

export const HrPolicesData : HrPolices[] =[
  {name:'Hr-policies-2024', UploadedOn:'2024-02-02',size: 10.5},
  {name:'Hr-policies-2025', UploadedOn:'2025-02-03', size: 15.5},
  {name:'Hr-policies-2026', UploadedOn:'2026-02-04', size: 17.5},
]

@Component({
  selector: 'app-hr-policies',
  templateUrl: './hr-policies.component.html',
  styleUrl: './hr-policies.component.scss'
})
export class HrPoliciesComponent {
  
data= new MatTableDataSource<any>( HrPolicesData);
displayedColumns: string[] =['name', 'UploadedOn', 'size', 'Action'];
showTable: boolean =true;

constructor(private router: Router){

  this.router.events.subscribe(()=>{
    const currentRoute = this.router.url;
    this.showTable= !currentRoute.includes('/all');
  })
}

}
