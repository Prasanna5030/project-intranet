import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../../services/snackbar.service';


export interface requestApproval{
 // file: File;
  title: string;
  department:string;
  assignedEmployee: string;
  dueDate: string
}

const ELEMENT_DATA: requestApproval[]=[
  { title: 'Title 1', department: 'Department 1', assignedEmployee : 'Employee 1', dueDate: '2020-01-01' },
  { title: 'Title 2', department: 'Department 2', assignedEmployee : 'Employee 2', dueDate: '2020-01-02' },
  { title: 'Title 3', department: 'Department 3', assignedEmployee : 'Employee 3', dueDate: '2020-01-03' },
  { title: 'Title 4', department: 'Department 4', assignedEmployee : 'Employee 4', dueDate: '2020-01-04' },
  { title: 'Title 5', department: 'Department 5', assignedEmployee : 'Employee 5', dueDate: '2020-01-05' },

]

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrl: './request-approval.component.scss'
})
export class RequestApprovalComponent implements OnInit{
triggerFileInput(fileInput : HTMLInputElement) {
fileInput.click();
}


  requestApprovalData=ELEMENT_DATA;

  requestApprovalForm!:FormGroup;
  selectedFile!:File;

  constructor(private fb: FormBuilder, private snackBarService : SnackbarService) { }

  ngOnInit(): void {
    this.requestApprovalForm = this.fb.group({
      file:[null, [Validators.required]],
      title: [null, [Validators.required]],
      department:[null, [Validators.required]],
      assignedEmployee:[null, [Validators.required]],
      dueDate:[null, [Validators.required]],
    })
  }



  onFileChange(event:Event){
    const input = event.target as HTMLInputElement;
    if(input.files?.[0]){
      this.selectedFile= input.files[0];
      this.requestApprovalForm.patchValue({
        file : this.selectedFile
      });
    }

  }
    handleFormSubmit() {
      if (this.requestApprovalForm.valid && this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
  
        // Simulate a file upload request (Replace this with your HTTP service)
        console.log('File to be uploaded:', this.selectedFile);
        this.snackBarService.openSnackBar('File uploaded successfully!', 'ok');
      } else {
        this.snackBarService.openSnackBar('Please select a file before submitting.', 'Close');
      }
    }
      
    
}
