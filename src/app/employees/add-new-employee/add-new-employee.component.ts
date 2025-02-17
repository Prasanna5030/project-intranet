import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { employees } from '../../../data/employeeData';
import { SnackbarService } from '../../services/snackbar.service';
import { GlobalConstants } from '../../shared/global-constants';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrl: './add-new-employee.component.scss'
})
export class AddNewEmployeeComponent implements OnInit {


  currentStep: number = 1;


  showPersonalDetails: boolean = false;
  showWorkDetails: boolean = false;
  showDocuments: boolean = false;

  employees = employees;

  departments: string[] = this.employees.map(emp=>emp.department);
  filteredDepartments: string[] =[...this.departments];
  searchDepartment: string='';


  teams : string[] = this.employees.map(emp=>emp.team);
  filteredTeams: string[] = [...this.teams];
  searchTeam: string='';

  addEmployeeForm!: FormGroup;
  aadhar!: File;
  pan!: File;
  selectedFiles!: File[];
  uploadedImage: any = 'assets/downloaded/Ellipse 2353.png';



  constructor(private router: Router, private fb: FormBuilder, private snackbarService: SnackbarService) {
    this.addEmployeeForm = this.fb.group({
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
    })


  }
  ngOnInit(): void {
    this.selectedFiles = [];
    this.addKycDocument();
    this.showPersonalDetails = true;
  }

  get kycDocuments(): FormArray {
    return this.addEmployeeForm.get('kycDocuments') as FormArray;
  }


  addKycDocument() {
    var kycForm = this.fb.group({
      value: ['']
    })
    this.kycDocuments.push(kycForm);

  }

  removeDocument(index: number) {
    this.kycDocuments.removeAt(index);
    this.selectedFiles.splice(index, 1);
  }

  goBack() {
    this.router.navigate(['/employees']);
  }

  onFileSelectAadhar($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.aadhar = file;
      this.addEmployeeForm.patchValue({ aadharCard: file })
      this.addEmployeeForm.get('aadharCard')?.updateValueAndValidity();
    }

  }

  onFileSelectPan($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.pan = file;
      this.addEmployeeForm.patchValue({ panCard: file });
      this.addEmployeeForm.get('panCard')?.updateValueAndValidity();
    }
  }


  onFileSelect($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = input.files as FileList;

      Array.from(files).forEach(file => {
        this.selectedFiles.push(file);
      });

      this.addEmployeeForm.patchValue({ kycDocuments: Array.from(files) })
      this.addEmployeeForm.get('kycDocuments')?.updateValueAndValidity();
    }
  }

  triggerInput(input: HTMLInputElement) {
    input.click();
  }

  handleNext($event: Event) {
    $event.preventDefault();

    if (this.showPersonalDetails && this.isCurrentStepValid()) {
      this.showWorkDetails = true;
      this.showPersonalDetails = false;
      this.showDocuments = false;
      this.currentStep++;
    }
    else if (this.showWorkDetails && this.isCurrentStepValid()) {
      this.showWorkDetails = false;
      this.showDocuments = true;
      this.showPersonalDetails = false;
      this.currentStep++;
    }
    else {
      this.snackbarService.openSnackBar('Please fill all the required details', 'error');
    }
  }

  handleNextDocuments($event: Event) {
    $event.stopPropagation();
    this.showPersonalDetails = false;
    this.showWorkDetails = false;
    this.showDocuments = true

  }


  handleSaveForm(form: FormGroup<any>) {
    var formData = form.value;
    console.log(formData);
    this.snackbarService.openSnackBar('saved successfully', '');
  }


  isCurrentStepValid() {
    if (this.currentStep === 1) {
      return this.addEmployeeForm.get('firstName')?.valid &&
        this.addEmployeeForm.get('lastName')?.valid &&
        this.addEmployeeForm.get('officialMail')?.valid &&
        this.addEmployeeForm.get('personalMail')?.valid &&
        this.addEmployeeForm.get('workPhone')?.valid &&
        this.addEmployeeForm.get('personalPhone')?.valid &&
        this.addEmployeeForm.get('address')?.valid;
    } else if (this.currentStep === 2) {
      return this.addEmployeeForm.get('designation')?.valid &&
        this.addEmployeeForm.get('department')?.valid &&
        this.addEmployeeForm.get('team')?.valid &&
        this.addEmployeeForm.get('reportingManager')?.valid &&
        this.addEmployeeForm.get('chatId')?.valid;
    } else if (this.currentStep === 3) {
      return this.kycDocuments.valid;
    }
    return false;
  }


  handleBack($event: Event) {
    $event.preventDefault();
    if (this.showWorkDetails) {
      this.showPersonalDetails = true;
      this.showWorkDetails = false;
      this.currentStep--;
    }
    else if (this.showDocuments) {
      this.showWorkDetails = true;
      this.showDocuments = false;
      this.currentStep--;

    }
  }

  onImageUpload($event: Event) {
    const input = $event.target as HTMLInputElement;
    if(input.files && input.files.length >0) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload =()=>{
        if(reader.result){
          this.uploadedImage= reader.result as string;
        }
      }
    reader.readAsDataURL(file);  
    }
    
  }


  filterDepartment($event: Event) {
   const filterValue = ($event.target as HTMLInputElement).value.toLowerCase();
    this.filteredDepartments = this.departments.filter(department=>{
     return department.toLowerCase().includes(filterValue);
    });
    }
    
    filterTeam($event: Event) {
     const filterValue = ($event.target as HTMLInputElement).value.toLowerCase();
     this.filteredTeams = this.teams.filter(team=>{
      return team.toLowerCase().includes(filterValue);
     })
      }
      
      
      
}
