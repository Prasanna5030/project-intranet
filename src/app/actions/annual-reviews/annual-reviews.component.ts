import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { review } from '../performance-reviews/performance-reviews.component';

export interface reviewData{

  employeeName: string,
  employeeId: number,
  submittedOn: string,
  status : boolean,

}

const ELEMENT_DATA: reviewData[]=[
  { employeeName: 'Jackson wille' , employeeId:102, submittedOn:'Nov 25, 2024', status:true },
  { employeeName: 'Bekky lynch' , employeeId:201, submittedOn:'Jan 21, 2024', status:false },
  { employeeName: 'Jon snow' , employeeId:251, submittedOn:'Dec 21, 2024', status:false },
  { employeeName: 'tyrion lannister' , employeeId:444, submittedOn:'Jun 21, 2024', status:false },
  { employeeName: 'James henry' , employeeId:452, submittedOn:'Jan 21, 2024', status:false },
  { employeeName: 'steve paul' , employeeId:152, submittedOn:'Jan 21, 2024', status:false },
  { employeeName: 'john cena' , employeeId:211, submittedOn:'Jan 21, 2024', status:false },

]

@Component({
  selector: 'app-annual-reviews',
  templateUrl: './annual-reviews.component.html',
  styleUrl: './annual-reviews.component.scss'
})
export class AnnualReviewsComponent  implements OnInit{
  
//  selectedReview:any;


@ViewChild(MatPaginator, {static : true}) paginator !: MatPaginator;
  
  constructor(private router : Router){
      console.log('====================================');
      console.log("all reviews comp loaded");
      console.log('====================================');
    //   this.router.events.subscribe(()=>{
    //     this.currentRoute = this.router.url;
    //     this.showAnnualReviews= this.currentRoute.includes('/annual-reviews');
      
    
    //  console.log('====================================');
    //  console.log('arc current route :'+this.currentRoute);
    //  console.log(this.showAnnualReviews)
    //  console.log('====================================');
    //  })

  }



displayedColumns: string[]=['employeeName' , 'employeeId' , 'submittedOn', 'status', 'actions']
dataSource=new MatTableDataSource<any>(ELEMENT_DATA);
currentRoute!: string;
showAnnualReviews: boolean= false;

onPageSizeChange(arg0: any) {
throw new Error('Method not implemented.');
}
pageSize: any;
goBack() {
this.router.navigate(['/action-center/performance-reviews']);
}


ngOnInit(): void {
 this.dataSource.paginator= this.paginator;
 console.log(this.selectedReview);

if(!this.selectedReview){
  this.router.navigate(['/action-center/performance-reviews']);
}
}

@Input() selectedReview!: review;
@Output() reviewSelected = new EventEmitter<review>();

// Emit an event when a review is selected
onReviewSelected(review: review) {
    this.reviewSelected.emit(review);
}

}
