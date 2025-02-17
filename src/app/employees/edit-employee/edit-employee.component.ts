import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { employees } from '../../../data/employeeData';
import { Employee } from '../../_model/employee';
import { GlobalConstants } from '../../shared/global-constants';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit, OnChanges {


  @Input() employee!: Employee;

  editForm!: FormGroup;
  aadhar!: File;
  pan!: File;
  selectedFiles!: File[];
  uploadedImage: any = 'assets/downloaded/Ellipse 2353.png';

  employees: Employee[] = employees;

  constructor(private router: Router, private fb: FormBuilder, private snackbarService: SnackbarService) {
    this.editForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      officialMail: ['', [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      personalMail: ['',[ Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      workPhone: ['', [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      personalPhone: ['', [Validators.required , Validators.pattern(GlobalConstants.contactNumberRegex)]],
      address: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      team: ['', Validators.required],
      reportingManager: ['', Validators.required],
      chatId: ['', Validators.required],
      aadharCard: ['', Validators.required],
      panCard: ['', Validators.required],
      kycDocuments: this.fb.array([])
    });

  }

  ngOnInit(): void {
    this.selectedFiles = [];
    this.addKycDocument();

  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee'] && this.employee) {
      this.editForm.patchValue(this.employee)
    }
  }

  get kycDocuments(): FormArray {
    return this.editForm.get('kycDocuments') as FormArray;
  }

  addKycDocument() {
    var kycForm = this.fb.group({
      value: ''
    });

    this.kycDocuments.push(kycForm);
  }

  removeKycDocument(index: number) {
    this.kycDocuments.removeAt(index);;
    this.selectedFiles.splice(index, 1);
  }



  goBack() {
    this.router.navigate(['/employees']);
  }

  triggerInput(input: HTMLInputElement) {
    input.click();
  }


  onFileSelectAadhar($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.aadhar = file;
      this.editForm.patchValue({ aadharCard: file })
      this.editForm.get('aadharCard')?.updateValueAndValidity();



    }
  }

  onFileSelectPan($event: Event) {

    const input = $event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.pan = file;
      this.editForm.patchValue({ panCard: file })
      this.editForm.get('panCard')?.updateValueAndValidity();
      console.log('====================================');
      console.log(this.pan);
      console.log('====================================');
    }
  }

  onFileSelect($event: Event) {
    const input = $event.target as HTMLInputElement;
    const files = input.files as FileList;
    if (files && files.length > 0) {
      // Array.from(files).forEach( file =>{
      //   const fileReader = new FileReader();
      //   fileReader.onload = () => {
      //     if(fileReader.result){
      //       this.selectedFiles.push(fileReader.result as string);
      //     }
      //   };
      //   fileReader.readAsDataURL(file);

      Array.from(files).forEach(file => {
        this.selectedFiles.push(file);
      })

      this.editForm.patchValue({ kycDocuments: Array.from(files) });
      this.editForm.get('kycDocuments')?.updateValueAndValidity();
      console.log('====================================');
      console.log(this.selectedFiles);
      console.log('====================================');

    }
  }


  uploadImage($event: Event) {
    const input = $event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.uploadedImage = reader.result as string;
        }

      }
      reader.readAsDataURL(file);
    }
  }


  handleSaveForm(form: FormGroup<any>) {
    this.snackbarService.openSnackBar('Saved Successfully' , '');
    console.log(form.value);
  }

}
