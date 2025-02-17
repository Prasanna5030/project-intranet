import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  UploadedOn: string;
  size: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [

    { name: 'declaration-forms-2024', UploadedOn: '01.01.2024', size: 13.6},
    { name: 'declaration-forms-2023', UploadedOn:  '01.01.2024',size: 13.6},
    { name: 'declaration-forms-2024', UploadedOn:  '01.01.2024',size: 13.6},
  ];

@Component({
  selector: 'app-all-declaration-forms',
  templateUrl: './all-declaration-forms.component.html',
  styleUrl: './all-declaration-forms.component.scss'
})
export class AllDeclarationFormsComponent implements OnInit {

  
  @ViewChild(MatPaginator)paginator!:MatPaginator;


searchTerm: any;
dataSource=new MatTableDataSource<any>(ELEMENT_DATA)
applyFilter() {
  this.dataSource.filter= this.searchTerm.trim().toLowerCase();
}
pageSize: any;
onPageSizeChange(arg0: any) {
throw new Error('Method not implemented.');
}
displayedColumns: string[] = ['name', 'UploadedOn', 'size', 'Action']


ngOnInit(): void {
  this.dataSource.paginator = this.paginator;
}
}
