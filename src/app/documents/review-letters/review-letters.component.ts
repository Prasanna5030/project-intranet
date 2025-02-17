import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Reviews-2024', UploadedOn: '01.01.2024', size: 13.6},
  { name: 'Reviews-2023', UploadedOn:  '01.01.2024',size: 13.6},
  { name: 'Reviews-2024', UploadedOn:  '01.01.2024',size: 13.6},
  
  
];

@Component({
  selector: 'app-review-letters',
  templateUrl: './review-letters.component.html',
  styleUrl: './review-letters.component.scss'
})
export class ReviewLettersComponent {

  showTable = true;


  
  dataSource= ELEMENT_DATA;

   displayedColumns=['name', 'UploadedOn', 'size', 'Action' ];

  constructor(private router: Router) {
      // Subscribe to route changes to toggle table visibility
      this.router.events.subscribe(() => {
        const currentRoute = this.router.url;
        this.showTable = !currentRoute.includes('/all'); // Hide table if /all route is active
      });
    }
   
  
  goBack() {
    this.router.navigate(['/my-documents']);
  }

  nav() {
  
    this.router.navigate(['/my-documents/review-letter/all']);
  }

}
