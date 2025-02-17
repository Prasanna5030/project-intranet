import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnnualReviewsComponent } from '../annual-reviews/annual-reviews.component';
import { MatTabChangeEvent } from '@angular/material/tabs';


export interface review{
  title: string
  department: string,
  totalEmployees: number,
  formsSubmitted:number,
  startDate: string,
  endDate: string

}



const reviews:review[]=[
  {title :'Annual Reviews 2024',department :'IT' ,totalEmployees:230 , formsSubmitted:230, startDate:'Jul 25,2023' , endDate:'Jul 5,2024'},
  {title :'Annual Reviews 2023',department :'HR' ,totalEmployees:150 , formsSubmitted:920, startDate:'May 20,2023' , endDate:'Mar 5,2024'},
  {title :'Annual Reviews 2022',department :'Finance' ,totalEmployees:420 , formsSubmitted:440, startDate:'Sep 19,2023' , endDate:'Dec 5,2024'},
  {title :'Annual Reviews 2021',department :'Marketing' ,totalEmployees:350 , formsSubmitted:230, startDate:'Aug 10,2023' , endDate:'Jun 5,2024'},
  {title :'Annual Reviews 2020',department :'Sales' ,totalEmployees:140 , formsSubmitted:670, startDate:'Jul 01,2023' , endDate:'Apr 5,2024'},
  {title :'Annual Reviews 2024',department :'IT' ,totalEmployees:230 , formsSubmitted:230, startDate:'Jul 25,2023' , endDate:'Jul 5,2024'},
  {title :'Annual Reviews 2023',department :'HR' ,totalEmployees:150 , formsSubmitted:920, startDate:'May 20,2023' , endDate:'Mar 5,2024'},
  {title :'Annual Reviews 2022',department :'Finance' ,totalEmployees:420 , formsSubmitted:440, startDate:'Sep 19,2023' , endDate:'Dec 5,2024'},
  {title :'Annual Reviews 2021',department :'Marketing' ,totalEmployees:350 , formsSubmitted:230, startDate:'Aug 10,2023' , endDate:'Jun 5,2024'},
  {title :'Annual Reviews 2020',department :'Sales' ,totalEmployees:140 , formsSubmitted:670, startDate:'Jul 01,2023' , endDate:'Apr 5,2024'},
  {title :'Annual Reviews 2024',department :'IT' ,totalEmployees:230 , formsSubmitted:230, startDate:'Jul 25,2023' , endDate:'Jul 5,2024'},
  {title :'Annual Reviews 2023',department :'HR' ,totalEmployees:150 , formsSubmitted:920, startDate:'May 20,2023' , endDate:'Mar 5,2024'},
  {title :'Annual Reviews 2022',department :'Finance' ,totalEmployees:420 , formsSubmitted:440, startDate:'Sep 19,2023' , endDate:'Dec 5,2024'},
  {title :'Annual Reviews 2021',department :'Marketing' ,totalEmployees:350 , formsSubmitted:230, startDate:'Aug 10,2023' , endDate:'Jun 5,2024'},
  {title :'Annual Reviews 2020',department :'Sales' ,totalEmployees:140 , formsSubmitted:670, startDate:'Jul 01,2023' , endDate:'Apr 5,2024'},
]

const annualReviewsData = [
  { formName : 'Annual Review 2024 (sales) ' , createdOn : '2024-03-24'},
  { formName : 'Annual Review 2023 (sales) ' , createdOn : '2023-03-21'},
  { formName : 'Annual Review 2022 (sales) ' , createdOn : '2022-04-26'},
  { formName : 'Annual Review 2021 (sales) ' , createdOn : '2021-02-14'},
  { formName : 'Annual Review 2020 (sales) ' , createdOn : '2020-09-19'},
]


@Component({
  selector: 'app-performance-reviews',
  templateUrl: './performance-reviews.component.html',
  styleUrl: './performance-reviews.component.scss'
})
// export class PerformanceReviewsComponent implements OnInit , AfterViewInit{



//   labelName!:string;

//   activeIndex:number | null = null;

//   dataSource=annualReviewsData;
//   displayedColumns: string[] =['formName' , 'createdOn' , 'Action'];

//   @ViewChild(AnnualReviewsComponent) annualReviewsComponent !: AnnualReviewsComponent;


  


//   annualReviews= reviews;

//   currentRoute!:string;
//   //show selected  review
//   selectedReview!:any ;

//    selectReview(r :review){
//     console.log('====================================');
//     console.log(r);
//     console.log('====================================');
//     this.selectedReview = r
//   //  this.annualReviewsComponent.selectedReview= r;
//     console.log(r)
//     console.log('===================================');
//    // console.log('selectedReview :' + this.selectedReview.department);
//     console.log('====================================');
//    }


//    clearSelectedReview(){
//     this.selectedReview=null;
//    }


//    //show annual review page 

//    showAnnualReview:boolean = false;
//    // show create form page
//    showCreateForm: boolean =false;

//    constructor(private router : Router){}


//   ngAfterViewInit(): void {
    
   
//   }
// // oninit  showAnnualReview , showCreateForm will be true
//    ngOnInit(): void {
//     this.router.events.subscribe(()=>{
//      this.currentRoute = this.router.url;

//       this.showAnnualReview= this.currentRoute.includes('/annual-reviews');
//       this.showCreateForm = this.currentRoute.includes('/create-form');
//       console.log('====================================');
//       console.log('show'+this.showAnnualReview);
//       console.log('====================================');
//     }
//     )
//   }
   
//   sendDataToChild() {
//     console.log('data sent to child');
//     console.log(this.selectedReview);
    
    
    


//  //  console.log('annualReviewcomp'+ this.annualReviewsComponent.selectedReview);
//     }
    

// applyFilter() {

// }
// searchTerm: any;


// openReview(_t21: review) {
//   throw new Error('Method not implemented.');
//   }

//   setActiveIndex(index: number) {
//     this.activeIndex = this.activeIndex === index ? null : index;
//     }

//     selectedTabValue(event:MatTabChangeEvent){
//       console.log(event);
//       this.labelName = event.tab.textLabel;
//       console.log(this.labelName)
//     }
    

//     navigateToReviews() {
//       this.router.navigate(['/action-center/performance-reviews/annual-reviews']);
//       console.log('====================================');
//       console.log(this.showAnnualReview = true);
//       console.log('====================================');
//     }
    
// }


export class PerformanceReviewsComponent implements OnInit, AfterViewInit {
  labelName!: string;
  activeIndex: number | null = null;

  dataSource = annualReviewsData;
  displayedColumns: string[] = ['formName', 'createdOn', 'Action'];

  @ViewChild(AnnualReviewsComponent) annualReviewsComponent!: AnnualReviewsComponent;

  annualReviews = reviews;
  currentRoute!: string;

  selectedReview!: any;
  showAnnualReview: boolean = false;
  showCreateForm: boolean = false;
  searchTerm: any;

  constructor(private router: Router) {

    this.router.events.subscribe(() => {
     
        this.currentRoute = this.router.url; // Update current route
        this.showAnnualReview = this.currentRoute.includes('/annual-reviews');
        this.showCreateForm = this.currentRoute.includes('/create-form');

        console.log('Current Route:', this.currentRoute);
        console.log('Show Annual Review:', this.showAnnualReview);
        console.log('Show Create Form:', this.showCreateForm);
      
    });
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
  }


  selectReview(r: review) {
    console.log('Selected Review:', r);
    this.selectedReview = r;
  }

  clearSelectedReview() {
    this.selectedReview = null;
  }


  applyFilter() {
    const term = this.searchTerm?.toLowerCase();
    this.annualReviews = reviews.filter((review) =>
      review.title.toLowerCase().includes(term) ||
      review.department.toLowerCase().includes(term)
    );
  }

  setActiveIndex(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  selectedTabValue(event: MatTabChangeEvent) {
    if (event?.tab?.textLabel) {
      this.labelName = event.tab.textLabel;
      console.log('Selected Tab:', this.labelName);
    }
  }

  navigateToReviews() {
    this.router.navigate(['/action-center/performance-reviews/annual-reviews']);
  }
}
