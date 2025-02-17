import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Asset } from '../../asset-management/asset-management.component';

export interface assetUsage{

  employeeId: string;
  employeeName: string;
  department: string;
  assignedOn: string;
  returnedOn: string;

}

const ELEMENT_DATA: assetUsage[]=[
  {  employeeId: '101', employeeName: 'Henry', department: 'IT', assignedOn: '2022-10-09', returnedOn: '2022-01-09' },
  {  employeeId: '111', employeeName: 'James', department: 'FINANCE', assignedOn: '2022-10-09', returnedOn: '2023-04-30' },
  // {  employeeId: '123', employeeName: 'Kevin', department: 'SALES', assignedOn: '2024-10-09', returnedOn: '2021-11-09' },
  // {  employeeId: '152', employeeName: 'Bella', department: 'IT', assignedOn: '2021-09-19', returnedOn: '2020-08-09' },
  // {  employeeId: '121', employeeName: 'dennis', department: 'HR', assignedOn: '2020-01-09', returnedOn: '2021-11-09' },
]


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent implements OnInit{
  asset!: Asset;
  assetUsageHistory = ELEMENT_DATA;

  displayedColumns: string[] = ['employeeId', 'employeeName', 'department', 'assignedOn', 'returnedOn'];

  constructor(@Inject(MAT_DIALOG_DATA) private data : any){

  }

  ngOnInit(): void {
   this.asset= this.data;
  }

}
