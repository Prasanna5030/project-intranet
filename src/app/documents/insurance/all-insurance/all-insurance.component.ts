import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface insurance{
  name: string ,
  UploadedOn:string;
  size:number;
}

const insuranceData: insurance[] = [
  {name:'insurance_001', UploadedOn: '2020-01-01', size: 100},
  {name:'insurance_002', UploadedOn: '2020-01-02', size:200},
  {name:'insurance_003', UploadedOn:'2020-01-09',size:300},
  {name:'insurance_004', UploadedOn:'2020-01-09',size:400},

]
@Component({
  selector: 'app-all-insurance',
  templateUrl: './all-insurance.component.html',
  styleUrl: './all-insurance.component.scss'
})
export class AllInsuranceComponent implements OnInit{


applyFilter() {
  this.dataSource.filter = this.searchTerm.trim().toLowerCase();
}
searchTerm: any;
onPageSizeChange(arg0: any) {
throw new Error('Method not implemented.');
}


@ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;
dataSource= new MatTableDataSource<any>(insuranceData);
displayedColumns:string[]= ['name', 'UploadedOn' , 'size','Action'];
pageSize: any;


ngOnInit(): void {
  this.dataSource.paginator= this.paginator;
}
}
