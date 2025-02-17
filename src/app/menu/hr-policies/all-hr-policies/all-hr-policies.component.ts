import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface HrPolices{
  name:string,
  UploadedOn : string,
  size: number
}

const HrPolicesData : HrPolices[] =[
  {name:'Hr-policies-2024.pdf', UploadedOn:'2024-02-02',size: 10.5},
  {name:'Hr-policies-2025.pdf', UploadedOn:'2025-02-03', size: 15.5},
  {name:'Hr-policies-2026.pdf', UploadedOn:'2026-02-04', size: 17.5},
  {name:'Hr-policies-2027.pdf', UploadedOn:'2026-02-04', size: 17.5},
  {name:'Hr-policies-2028.pdf', UploadedOn:'2026-02-04', size: 17.5},
]
@Component({
  selector: 'app-all-hr-policies',
  templateUrl: './all-hr-policies.component.html',
  styleUrl: './all-hr-policies.component.scss'
})
export class AllHrPoliciesComponent {
  dataSource= new MatTableDataSource<any>( HrPolicesData);
  displayedColumns: string[] =['name', 'UploadedOn', 'size', 'Action'];
}
