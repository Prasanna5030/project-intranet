import { Component } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [

    { name: 'insurance-2024', UploadedOn: '01.01.2024', size: 13.6},
    { name: 'insurance-2023', UploadedOn:  '01.01.2024',size: 13.6},
    { name: 'insurance-2024', UploadedOn:  '01.01.2024',size: 13.6},
  ];

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss'
})
export class InsuranceComponent {
  showTable=true;

  dataSource= ELEMENT_DATA;
  displayedColumns=['name', 'UploadedOn', 'size', 'Action'];
  constructor(private router: Router){

    this.router.events.subscribe(()=>{
      const currentRoute = this.router.url;
      this.showTable=!currentRoute.includes('/all');
    })


  }

  goBack(){
    this.router.navigate(['/my-documents']);
  }



}
