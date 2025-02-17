import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

interface JobOpening {
  jobCode: string;
  jobTitle: string;
  jobLocation: string;
  experience: string;
}

interface TableColumn {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss'],
})
export class JobOpeningsComponent implements OnInit, OnDestroy {
  // Column definitions
  columns: TableColumn[] = [
    {
      columnDef: 'jobCode',
      header: 'Job Code',
      cell: (element: JobOpening) => element.jobCode,
    },
    {
      columnDef: 'jobTitle',
      header: 'Job Title',
      cell: (element: JobOpening) => element.jobTitle,
    },
    {
      columnDef: 'jobLocation',
      header: 'Job Location',
      cell: (element: JobOpening) => element.jobLocation,
    },
    {
      columnDef: 'experience',
      header: 'Experience',
      cell: (element: JobOpening) => element.experience,
    },
  ];

  // Mock data
  mockData: JobOpening[] = [
    {
      jobCode: 'JD001',
      jobTitle: 'Frontend Developer',
      jobLocation: 'Bangalore',
      experience: '2-4 Years',
    },
    {
      jobCode: 'JD002',
      jobTitle: 'UI/UX Designer',
      jobLocation: 'Mumbai',
      experience: '3-5 Years',
    },
    {
      jobCode: 'JD003',
      jobTitle: 'Backend Developer',
      jobLocation: 'Hyderabad',
      experience: '4-6 Years',
    },
  ];

  // Component properties
  dataSource = new MatTableDataSource<JobOpening>();
  displayedColumns: string[] = [];
  totalItems: number = 0;
  currentPage: number = 0;
  pageSize: number = 5;
  totalPages = 0;
  paginatedData: JobOpening[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private http: HttpClient) {
    this.setupDisplayColumns();
  }

  ngOnInit() {
    // Using mock data instead of HTTP request
    this.dataSource = new MatTableDataSource<JobOpening>(this.mockData);
    this.updatePagination();
  }

  private setupDisplayColumns() {
    this.displayedColumns = [
      ...this.columns.map((c) => c.columnDef),
      'actions',
    ];
  }

  updatePagination() {
    const sourceData = this.dataSource.data;
    this.totalItems = sourceData.length;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.paginatedData = this.getPaginatedData();
  }

  getPaginatedData(): JobOpening[] {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return [...this.dataSource.data].slice(startIndex, endIndex);
  }

  onPageChange(newPage: number) {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.currentPage = newPage;
      this.paginatedData = this.getPaginatedData();
    }
  }

  onPageSizeChange(newPageSize: number) {
    this.pageSize = newPageSize;
    this.currentPage = 0;
    this.updatePagination();
  }

  isPrevDisabled(): boolean {
    return this.currentPage <= 0;
  }

  isNextDisabled(): boolean {
    return this.currentPage >= this.totalPages - 1;
  }

  onJobClick(): void {
    this.router.navigate(['careers/job-details']);
  }

  trackByFn(index: number, item: any): any {
    return item.jobCode || index;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
