import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Asset } from '../../asset-management/asset-management.component';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-unassign',
  templateUrl: './unassign.component.html',
  styleUrl: './unassign.component.scss'
})
export class UnassignComponent implements OnInit{
asset!: Asset;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any , private snackbarService : SnackbarService) {
   
    
   }
  
  
  handleUnassign(data:any) {
    this.snackbarService.openSnackBar('Unassigned Successfully' , '')
    this.asset.assignee=null;
    this.asset.assetStatus=false;
    }


    ngOnInit(): void {
      this.asset = this.data;
    }

  
}
