import { Component } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [

    { name: 'declaration-forms-2024', UploadedOn: '01.01.2024', size: 13.6},
    { name: 'declaration-forms-2023', UploadedOn:  '01.01.2024',size: 13.6},
    { name: 'declaration-forms-2024', UploadedOn:  '01.01.2024',size: 13.6},
  ];

@Component({
  selector: 'app-declaration-forms',
  templateUrl: './declaration-forms.component.html',
  styleUrl: './declaration-forms.component.scss'
})
export class DeclarationFormsComponent {

  showTable:boolean = true;

  //iconPath:string = "assets/HR Policies Assets/Icons/Delete.svg";
  dataSource= ELEMENT_DATA;
  displayedColumns=['name', 'UploadedOn', 'size', 'Action'];

  constructor(private router: Router){

    this.router.events.subscribe(()=>{
      const currentRoute = this.router.url;
      this.showTable= !currentRoute.includes('/all');
    })

  }

  goBack(){
    this.router.navigate(['/my-documents']);
  }

}
