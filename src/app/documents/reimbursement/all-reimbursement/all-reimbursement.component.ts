import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'reimbursement-001', UploadedOn: '01.01.2024', size: 13.6},
  { name: 'reimbursement-002', UploadedOn:  '01.01.2024',size: 13.6},
  { name: 'reimbursement-003', UploadedOn:  '01.01.2024',size: 13.6},
  
  
]; 
@Component({
  selector: 'app-all-reimbursement',
  templateUrl: './all-reimbursement.component.html',
  styleUrl: './all-reimbursement.component.scss'
})
export class AllReimbursementComponent  implements OnInit{

  @ViewChild(MatPaginator,{static:true})paginator!:MatPaginator;


onPageSizeChange(arg0: any) {
throw new Error('Method not implemented.');
}
pageSize: any;
applyFilter() {
  this.dataSource.filter = this.searchTerm.trim().toLowerCase();
}

displayedColumns: string[] = ['name', 'UploadedOn', 'size' , 'Action']
dataSource= new MatTableDataSource(ELEMENT_DATA);
searchTerm: any;

ngOnInit(): void {
  this.dataSource.paginator= this.paginator; 
}

}
