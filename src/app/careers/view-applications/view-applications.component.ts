import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

interface Application {
  employeeId: string;
  employeeName: string;
  department: string;
  designation: string;
  appliedDate: string;
  resume: string;
}

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.scss'],
})
export class ViewApplicationsComponent implements OnInit {
  applications: Application[] = [];
  pageSize: number = 10;
  totalApplications: number = 0;
  currentPage: number = 0;
  paginatedApplications: Application[] = [];
  totalPages: number = 0;
  pageNumbers: number[] = [];

  columns = [
    { header: 'Employee ID', field: 'employeeId' },
    { header: 'Employee Name', field: 'employeeName' },
    { header: 'Department', field: 'department' },
    { header: 'Designation', field: 'designation' },
    { header: 'Applied Date', field: 'appliedDate' },
    { header: 'Resume', field: 'resume' },
  ];

  constructor(private http: HttpClient, private location: Location) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    this.http
      .get<{ applications: Application[] }>('assets/applications.json')
      .subscribe((data) => {
        this.applications = data.applications;
        this.totalApplications = this.applications.length;
        this.calculateTotalPages();
        this.updatePaginatedData();
      });
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalApplications / this.pageSize);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i);
  }

  updatePaginatedData() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedApplications = this.applications.slice(startIndex, endIndex);
  }

  onPageSizeChange(event: any) {
    this.pageSize = parseInt(event.target.value);
    this.calculateTotalPages();
    this.currentPage = 0; // Reset to first page
    this.updatePaginatedData();
  }

  // Pagination methods
  onPageChange(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedData();
    }
  }

  isPrevDisabled(): boolean {
    return this.currentPage <= 0;
  }

  isNextDisabled(): boolean {
    return this.currentPage >= this.totalPages - 1;
  }
  downloadResume(resume: string) {
    // Implement resume download logic here
    console.log(`Downloading resume: ${resume}`);
  }

  goBack() {
    this.location.back();
  }
}
