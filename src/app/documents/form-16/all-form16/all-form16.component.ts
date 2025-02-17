import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface form16{
  name: string ,
  UploadedOn:string;
  size:number;
}

const form16Data: form16[] = [
  {name:'form_16_001', UploadedOn: '2020-01-01', size: 100},
  {name:'form_16_002', UploadedOn: '2020-01-02', size:200},
  {name:'form_16_003', UploadedOn:'2020-01-09',size:300},
  {name:'form_16_004', UploadedOn:'2020-01-09',size:400},

]

@Component({
  selector: 'app-all-form16',
  templateUrl: './all-form16.component.html',
  styleUrl: './all-form16.component.scss'
})
export class AllForm16Component implements OnInit{
 

  @ViewChild(MatPaginator, {static : true})paginator!: MatPaginator;
  applyFilter() {
    this.dataSource.filter= this.searchTerm.trim().toLowerCase();

    }
    searchTerm: any;
    onPageSizeChange(arg0: any) {
    throw new Error('Method not implemented.');
    }
    dataSource= new MatTableDataSource(form16Data);
    displayedColumns:string[]= ['name', 'UploadedOn' , 'size','Action'];
    pageSize: any;

    ngOnInit(): void {
     
      this.dataSource.paginator = this.paginator;
    }
    
}
