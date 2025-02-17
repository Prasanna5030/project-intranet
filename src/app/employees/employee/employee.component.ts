import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employee } from '../../_model/employee';
import { employees } from '../../../data/employeeData';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit, OnDestroy, AfterViewInit {



  searchTerm: string = '';
  isFocused: boolean = false;

  totalEmployees: number = 251;
  pageSize: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selectedEmployee!: Employee;

  employees: Employee[] = employees;
  displayedColumns: string[] = ['employeeId', 'employeeName', 'joiningDate', 'designation', 'reportingManager', 'actions', 'viewDetails'];

  dataSource = new MatTableDataSource<Employee>(employees);


  showEditEmployee: boolean = false;
  showViewDetailsEmployee: boolean = false;
  showAddNewEmployee: boolean = false;
  currentRoute!: string;

  private destroy = new Subject<void>();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy))
      .subscribe(() => {
        this.currentRoute = this.router.url;

        if (this.currentRoute.includes('/edit-employee')) {
          this.showEditEmployee = true;
        } else if (this.currentRoute.includes('/view-details')) {
          this.showViewDetailsEmployee = true;

        }
        else if (this.currentRoute.includes('/add-new-employee')) {
          this.showAddNewEmployee = true;
        }
        else {
          this.showEditEmployee = false;
          this.showViewDetailsEmployee = false;
          this.showAddNewEmployee = false;
        }

      }

      )
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }




  ngOnInit(): void {

  }

  onBlur() {
    if (!this.searchTerm) {
      this.isFocused = false;
    }

  }
  onFocus() {
    this.isFocused = true;
  }

  clearSearch() {
    this.searchTerm = '';

    this.isFocused = false;
    this.applyFilter();
  }


  applyFilter() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }


  onViewDetails(employee: Employee) {
    this.router.navigate(['/employees/view-details']);
    this.selectedEmployee = employee;
  }
  onDelete(_t99: any) {
    throw new Error('Method not implemented.');
  }
  onEdit(employee: Employee) {
    this.router.navigate(['/employees/edit-employee']);
    this.selectedEmployee = employee;

  }
  onPageSizeChange(arg0: any) {
  
  }

  handleAddNewEmployee() {
    this.router.navigate(['/employees/add-new-employee']);
  }


}
