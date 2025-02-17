import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HrPolicesData } from '../menu/hr-policies/hr-policies.component';
import { Router } from '@angular/router';



export interface Form{
  name:string,
  UploadedOn : string,
  size: number
}

export const FormsData : Form[] =[
  {name:'Tax-declaration-form.doc', UploadedOn:'2024-02-02',size: 10.5},
  {name:'Employee-disclosure-form.doc', UploadedOn:'2025-02-03', size: 15.5},
  {name:'Leave-application-form.doc', UploadedOn:'2026-02-04', size: 17.5},
]

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

    
  data= new MatTableDataSource<any>( FormsData);
  displayedColumns: string[] =['name', 'UploadedOn', 'size', 'Action'];
  showTable: boolean =true;
  
  constructor(private router: Router){
    this.router.events.subscribe(()=>{
      const currentRoute = this.router.url;
      this.showTable= !currentRoute.includes('/all');
    })
  }
}
