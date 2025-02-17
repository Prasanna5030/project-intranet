import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



interface Payslip{
  name: string;
  UploadedOn : string;
  size :number;
}


const payslipData: Payslip[] = [
  {name:'payslip_001', UploadedOn:'2020-01-01',size: 100},
  {name:'payslip_002', UploadedOn:'2020-01-02',size:200},
  {name:'payslip_003', UploadedOn:'2020-01-03',size:300},
  {name:'payslip_004', UploadedOn:'2020-01-04',size:400},
  {name:'payslip_005', UploadedOn:'2020-01-05',size:500},
  {name:'payslip_001', UploadedOn:'2020-01-01',size: 100},
  {name:'payslip_002', UploadedOn:'2020-01-02',size:200},
  {name:'payslip_003', UploadedOn:'2020-01-03',size:300},
  {name:'payslip_004', UploadedOn:'2020-01-04',size:400},
  {name:'payslip_005', UploadedOn:'2020-01-05',size:500},
]

@Component({
  selector: 'app-all-payslips',
  templateUrl: './all-payslips.component.html',
  styleUrl: './all-payslips.component.scss'
})
export class AllPayslipsComponent implements OnInit {
  

  @ViewChild(MatPaginator, {static: true} )paginator!: MatPaginator;
applyFilter() {
 this.dataSource.filter = this.searchTerm.trim().toLowerCase();
}
dataSource= new MatTableDataSource<any>(payslipData);
displayedColumns: any = ['name' , 'UploadedOn',  'size' , 'Action'];
pageSize: any;
searchTerm: any;
onPageSizeChange(arg0: any) {
throw new Error('Method not implemented.');
}


ngOnInit(): void {
  this.dataSource.paginator= this.paginator;
}
}
