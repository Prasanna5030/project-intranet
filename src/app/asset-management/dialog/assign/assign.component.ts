import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../../../services/snackbar.service';


export interface assignAsset{
  department: string,
  team: string,
  employeeId: number,
  employeeName: string
}

const ELEMENT_DATA: assignAsset[] =[
  { department : 'HR' , team : 'HR Team' , employeeId : 1234 , employeeName : 'John Doe'},
  { department : 'IT' , team : 'IT Team' , employeeId : 567 , employeeName : 'Jane Doe'},
  { department : 'Finance' , team : 'Finance Team' , employeeId : 890 , employeeName : 'kevin'},
  { department : 'HR' , team : 'HR Team' , employeeId : 123 , employeeName : 'peter'},
  { department : 'IT' , team : 'IT Team' , employeeId : 456, employeeName : 'linda'},
];


@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrl: './assign.component.scss'
})



export class AssignComponent implements OnInit{


  assignedAsset = ELEMENT_DATA;

  assignForm!:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private fb : FormBuilder , private snackbarService : SnackbarService) { 

    this.assignForm = this.fb.group({
      department: ['', Validators.required],
      team : ['', Validators.required],
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
    })

  }


 

  ngOnInit(): void {
    
    
  }

  handleAssignAsset(form: FormGroup) {
    this.snackbarService.openSnackBar('Assigned Asset Successfully', 'success');
      console.log('====================================');
      console.log(form.value);
      console.log('====================================');
    }

}
