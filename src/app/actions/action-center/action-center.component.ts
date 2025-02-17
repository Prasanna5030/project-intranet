import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateFormComponent } from '../create-form/create-form.component';
import { InitiateReviewComponent } from '../dialog/initiate-review/initiate-review.component';
import { InitiateTaskComponent } from '../dialog/initiate-task/initiate-task.component';
import { RequestApprovalComponent } from '../dialog/request-approval/request-approval.component';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-action-center',
  templateUrl: './action-center.component.html',
  styleUrl: './action-center.component.scss'
})
export class ActionCenterComponent implements OnInit{

  tabIndex!:number ;

  showAnnualReviews:boolean = false;
  showCreateForm:boolean = false;

  currentRoute:string=''

  constructor(private router : Router , private dialog : MatDialog){

    
  }

  ngOnInit(): void {
    this.router.events.subscribe(()=>{
      
      this.currentRoute = this.router.url;
       
       this.showAnnualReviews= this.currentRoute.includes('/annual-reviews');
       this.showCreateForm = this.currentRoute.includes('/create-form');
       
     })
  }



onExitTaskClick() {

  const taskdialogConfig = new MatDialogConfig();
  taskdialogConfig.panelClass='custom-dialog-container' 

  const dialogRef = this.dialog.open(InitiateTaskComponent, taskdialogConfig);

}


onRequestApproval() {
    const requestDialogConfig = new MatDialogConfig();
    requestDialogConfig.panelClass='custom-dialog-container' 

    const dialogRef = this.dialog.open(RequestApprovalComponent, requestDialogConfig);
  }
  onCreateForm() {
     
    this.router.navigate(['/action-center/performance-reviews/create-form']);


  }
  onInitiateReview() {
      const reviewDialogConfig = new MatDialogConfig();
      reviewDialogConfig.panelClass='custom-dialog-container'
      
      const dialogRef = this.dialog.open(InitiateReviewComponent, reviewDialogConfig);
  }


  selectedTabValue(event: MatTabChangeEvent) {
      this.tabIndex= event.index;

      if(this.tabIndex=== 0){
        this.router.navigate(['/action-center/exit-tasks'])
      } else if(this.tabIndex === 1) {
        this.router.navigate(['/action-center/performance-reviews'])
      } else if(this.tabIndex === 2) {
        this.router.navigate(['/action-center/offers-promotions'])
      }
    }
  
}
