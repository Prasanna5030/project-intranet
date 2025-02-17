import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';




interface DocReview {
  name:string;
  UploadedOn:string;
  size:number

}

const ELEMENT_DATA : DocReview[] = [
  {name: 'Review_letter_01', UploadedOn: '2020-01-01', size: 20.5},
  {name: 'Review_letter_02', UploadedOn: '2020-01-02', size:15.9},
  {name: 'Review_letter_03', UploadedOn: '2020-01-03', size:32.8},
  {name: 'Review_letter_04', UploadedOn:'2022-01-04' , size:73.2},
  {name: 'Review_letter_01', UploadedOn: '2020-01-01', size: 20.5},
  {name: 'Review_letter_02', UploadedOn: '2020-01-02', size:15.9},
  {name: 'Review_letter_03', UploadedOn: '2020-01-03', size:32.8},
  {name: 'Review_letter_01', UploadedOn: '2020-01-01', size: 20.5},
  {name: 'Review_letter_02', UploadedOn: '2020-01-02', size:15.9},
  {name: 'Review_letter_03', UploadedOn: '2020-01-03', size:32.8},
  {name: 'Review_letter_01', UploadedOn: '2020-01-01', size: 20.5},
  {name: 'Review_letter_02', UploadedOn: '2020-01-02', size:15.9},
  {name: 'Review_letter_03', UploadedOn: '2020-01-03', size:32.8}, 
]
@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrl: './all-reviews.component.scss'
})

export class AllReviewsComponent implements OnInit{



totalPages: any;
searchTerm: any;
displayedColumns: string[]=['name', 'UploadedOn' , 'size', 'Action'];

isNextDisabled() {

}
applyFilter() {
   this.dataSource.filter = this.searchTerm.trim().toLowerCase();
}

dataSource= new MatTableDataSource<DocReview>(ELEMENT_DATA);

@ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

onPageSizeChange(arg0: any) {

}
paginatedData: any;
columns: any;
pageSize: any;
onAssignClick(_t40: any) {
throw new Error('Method not implemented.');
}
actions: any;
onPageChange(arg0: number) {
throw new Error('Method not implemented.');
}
currentPage: any;
isPrevDisabled() {
throw new Error('Method not implemented.');
}

  constructor(private router : Router){
    console.log('All Reviews Component Loaded');
   

  }

  ngOnInit(): void {
  
    this.dataSource.paginator= this.paginator; 
  }

  goBack() {
    this.router.navigate(['/my-documents/review-letters']);
  }
}
