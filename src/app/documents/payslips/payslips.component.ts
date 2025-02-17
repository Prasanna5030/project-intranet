import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Payslips-2024', UploadedOn: '01.01.20204', size: 13.6},
  { name: 'Payslips-2023', UploadedOn:  '01.01.20204',size: 13.6},
  { name: 'Payslips-2024', UploadedOn:  '01.01.20204',size: 13.6},
  
  
];

@Component({
  selector: 'app-payslips',
  templateUrl: './payslips.component.html',
  styleUrl: './payslips.component.scss'
})
export class PayslipsComponent {
showTable:boolean = true;


  constructor(private router: Router , private route: ActivatedRoute) {

    this.router.events.subscribe(()=>{
      const currentRoute = this.router.url;
      this.showTable= !currentRoute.includes('/all');
    })


   }

  goBack() {
    this.router.navigate(['/my-documents']);
  }

  displayedColumns: string[] = [ 'name', 'UploadedOn', 'size','Action'];
  dataSource = ELEMENT_DATA;
  
}
