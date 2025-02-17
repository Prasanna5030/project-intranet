import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HrPolicesData } from '../../menu/hr-policies/hr-policies.component';
import { FormsData } from '../forms.component';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrl: './all-forms.component.scss'
})
export class AllFormsComponent {
dataSource= new MatTableDataSource<any>( FormsData);
  displayedColumns: string[] =['name', 'UploadedOn', 'size', 'Action'];
  showTable: boolean =true;
}
