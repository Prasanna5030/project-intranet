import { Component } from '@angular/core';
import { Router } from '@angular/router';



export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'reimbursement-2024', UploadedOn: '01.01.2024', size: 13.6},
  { name: 'reimbursement-2023', UploadedOn:  '01.01.2024',size: 13.6},
  { name: 'reimbursement-2024', UploadedOn:  '01.01.2024',size: 13.6},
  
  
];
@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrl: './reimbursement.component.scss'
})
export class ReimbursementComponent {

  showTable:boolean= true;

  constructor(private router : Router){

    this.router.events.subscribe(()=>{
      const url = this.router.url;
      this.showTable= !url.includes("/all");
    })

  }
  dataSource=ELEMENT_DATA;

  displayedColumns: string[] = ['name', 'UploadedOn', 'size', 'Action'];
   
  goBack(){
    this.router.navigate(['/my-documents']);
  }
}
