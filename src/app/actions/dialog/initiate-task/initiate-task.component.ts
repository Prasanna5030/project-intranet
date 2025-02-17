import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../../services/snackbar.service';


export interface data{
  employeeName: string,
  exitReason: string ,
  exitDate: string,
  taskTitle: string,
  taskDescription: string,
  assignedDepartment: string,
  assignedEmployee: string
}


const ELEMENT_DATA: data[]=[
  { employeeName: 'Sam Smith' , exitReason:'Termination' , exitDate: '2024-09-07' , taskTitle:'' , taskDescription:'', assignedDepartment:'IT' ,assignedEmployee : 'Mark Zujer' },

  { employeeName: 'James Smith' , exitReason:'Resignation' , exitDate: '2024-03-22' , taskTitle:'' , taskDescription:'', assignedDepartment:'SALES' ,assignedEmployee : 'Peter Parker' },
  
  { employeeName: 'will Smith' , exitReason:'Resignation' , exitDate: '2024-11-02' , taskTitle:'' , taskDescription:'', assignedDepartment:'FINANCE' ,assignedEmployee : 'Kat williams' },
  
  { employeeName: 'paul Smith' , exitReason:'Termination' , exitDate: '2024-01-02' , taskTitle:'' , taskDescription:'', assignedDepartment:'IT' ,assignedEmployee : 'Perry Edwards' },
  
  { employeeName: 'kevin Smith' , exitReason:'Resignation' , exitDate: '2024-09-04' , taskTitle:'' , taskDescription:'', assignedDepartment:'IT' ,assignedEmployee : 'Zayn Malik' },
  
]
@Component({
  selector: 'app-initiate-task',
  templateUrl: './initiate-task.component.html',
  styleUrl: './initiate-task.component.scss'
})
export class InitiateTaskComponent implements OnInit {

  showAnotherTask:boolean =false;


  
  sampleData= ELEMENT_DATA;

  exitTaskForm !:FormGroup;
  submitted:boolean=false;
  

  constructor(private fb: FormBuilder , private snackBarService : SnackbarService) { }
ngOnInit(): void {

  this.exitTaskForm =this.fb.group({
    employeeName : [null, [Validators.required]],
    exitReason : [null , [Validators.required]],
    exitDate : [null, [Validators.required]],
    tasks: this.fb.array([]),
  })

  this.addTask();
}



addTask(){
  const taskForm = this.fb.group({
    taskTitle: ['' , [Validators.required]],
    taskDescription: ['', [Validators.required]],
    assignedDepartment : ['' , [Validators.required]],
    assignedEmployee : ['' , [Validators.required]]
  })

  this.tasks.push(taskForm);
}


get tasks(): FormArray {
  return this.exitTaskForm.get('tasks') as FormArray;
}


addAnotherTask() {
  this.showAnotherTask=true;
  this.addTask();

}


removeTask(index: number){
  this.tasks.removeAt(index);
}

handleSubmit() {

  this.snackBarService.openSnackBar('initiated exit task successfully', '')
  var formData = this.exitTaskForm.value;

  console.log(formData);


  }
}
