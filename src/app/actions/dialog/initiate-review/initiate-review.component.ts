import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../services/snackbar.service';
export interface intiateReview{
  title: string,
  description: string,
  startDate: string,
  endDate: string,
  department : string,
  
}

const ELEMENT_ANNUAL_REVIEW_DATA= [
  { formName : 'Annual Review 2024 (sales) ' , createdOn : '2024-03-24'},
  { formName : 'Annual Review 2023 (sales) ' , createdOn : '2023-03-21'},
  { formName : 'Annual Review 2022 (sales) ' , createdOn : '2022-04-26'},
  { formName : 'Annual Review 2021 (sales) ' , createdOn : '2021-02-14'},
  { formName : 'Annual Review 2020 (sales) ' , createdOn : '2020-09-19'},
 
]
const ELEMENT_DATA : intiateReview[] = [
  { title: 'Review 1', description: 'This is a review 1', startDate: '2024-01-01' , endDate: '2024-01-31', department: 'IT'},
  { title: 'Review 2', description: 'This is a review 2', startDate: '2024-02-01' , endDate: '2024-02-28', department: 'HR'},
  { title: 'Review 3', description: 'This is a review 3', startDate: '2024-03-01' , endDate: '2024-03-31', department: 'Finance'},
  { title: 'Review 4', description: 'This is a review 4', startDate: '2024-04-01' , endDate: '2024-04-30', department: 'sales'}
]
@Component({
  selector: 'app-initiate-review',
  templateUrl: './initiate-review.component.html',
  styleUrl: './initiate-review.component.scss'
})
export class InitiateReviewComponent {
displayedColumns: string[] = [ 'formName' , 'createdOn' , 'Action']
dataSource= ELEMENT_ANNUAL_REVIEW_DATA;
goBack() {
  this.router.navigate(['/action-center/performance-reviews']);
}


  intiateReviewData=ELEMENT_DATA;

 

  showAnnualReviewsTable:boolean=false;

triggerFileInput(inputELement: HTMLInputElement) {
  inputELement.click();
}


onFileChange($event: Event) {
throw new Error('Method not implemented.');
}

  intiateReviewForm!:FormGroup;


  constructor(private fb: FormBuilder , private router : Router, private snackbarService : SnackbarService){
    this.intiateReviewForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      department: ['', Validators.required],
    })    



  }


  onSubmit() {
    this.snackbarService.openSnackBar('Initiated review successfully' , '');
    var formData = this.intiateReviewForm.value;
    console.log('====================================');
    console.log(formData);
    console.log('====================================');
    }
    

    showAnnualReviewsTableData() {
      this.showAnnualReviewsTable=true;
      }
}
