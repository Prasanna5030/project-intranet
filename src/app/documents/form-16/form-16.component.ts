import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [

    { name: 'form16-2024', UploadedOn: '01.01.2024', size: 13.6},
    { name: 'form16-2023', UploadedOn:  '01.01.2024',size: 13.6},
    { name: 'form16-2024', UploadedOn:  '01.01.2024',size: 13.6},
  ];

@Component({
  selector: 'app-form-16',
  templateUrl: './form-16.component.html',
  styleUrl: './form-16.component.scss'
})
export class Form16Component {
  
  showTable:boolean= true;
  dataSource= ELEMENT_DATA;
  displayedColumns=['name', 'UploadedOn', 'size', 'Action'];
  constructor(private router: Router){

    this.router.events.subscribe(()=>{
      const route = this.router.url;
      this.showTable=!route.includes('/all')
    })

  }

  goBack(){
    this.router.navigate(['/my-documents']);
  }

  

}
