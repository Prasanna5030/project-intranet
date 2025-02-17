import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

// Interfaces
interface PendingRequisition {
  jobTitle: string;
  experience: string;
  managerId: string;
  managerName: string;
  managerImage: string;
  requisitionDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'Pending' | 'Approve' | 'Reject';
  rejectionReason?: string;
}

interface TableColumn {
  columnDef: string;
  header: string;
  cell: (element: any) => any;
}

interface TableAction {
  icon: string;
  tooltip: string;
  handler: (element: any) => void;
}

@Component({
  selector: 'app-pending-requisitions',
  templateUrl: './pending-requisitions.component.html',
  styleUrls: ['./pending-requisitions.component.scss'],
})
export class PendingRequisitionsComponent implements OnInit, OnDestroy {
  // Table configuration
  columns: TableColumn[] = [
    {
      columnDef: 'jobTitle',
      header: 'Job Title',
      cell: (element: PendingRequisition) => element.jobTitle,
    },
    {
      columnDef: 'experience',
      header: 'Experience',
      cell: (element: PendingRequisition) => element.experience,
    },
    {
      columnDef: 'managerId',
      header: 'Manager ID',
      cell: (element: PendingRequisition) => element.managerId,
    },
    {
      columnDef: 'managerName',
      header: 'Manager Name',
      cell: (element: PendingRequisition) => ({
        name: element.managerName,
        image: element.managerImage,
      }),
    },
    {
      columnDef: 'requisitionDate',
      header: 'Requisition Date',
      cell: (element: PendingRequisition) => element.requisitionDate,
    },
    {
      columnDef: 'priority',
      header: 'Priority',
      cell: (element: PendingRequisition) => element.priority,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: PendingRequisition) => element.status,
    },
  ];

  actions: TableAction[] = [
    {
      icon: 'view',
      tooltip: 'View Details',
      handler: (element: PendingRequisition) => this.openModal(element),
    },
  ];

  // Mock data
  mockData: PendingRequisition[] = [
    {
      jobTitle: 'UI Designer',
      experience: '1 Year',
      managerId: '015',
      managerName: 'Darrell Steward',
      managerImage: 'https://randomuser.me/api/portraits/men/44.jpg',
      requisitionDate: '1/2/2024',
      priority: 'high',
      status: 'Pending',
    },
    {
      jobTitle: 'Motion Designer',
      experience: '2+ Years',
      managerId: '027',
      managerName: 'Darrell Steward',
      managerImage: 'https://randomuser.me/api/portraits/men/45.jpg',
      requisitionDate: '29/1/2024',
      priority: 'low',
      status: 'Pending',
    },
    {
      jobTitle: 'UX Researcher',
      experience: '5+ Years',
      managerId: '053',
      managerName: 'Darrell Steward',
      managerImage: 'https://randomuser.me/api/portraits/men/46.jpg',
      requisitionDate: '28/1/2024',
      priority: 'medium',
      status: 'Pending',
    },
  ];

  // Data handling
  dataSource = new MatTableDataSource<PendingRequisition>();
  displayedColumns: string[] = [];
  private subscription: Subscription = new Subscription();

  // Pagination
  pageSize: number = 10;
  currentPage: number = 0;
  totalItems: number = 0;
  totalPages: number = 0;
  paginatedData: PendingRequisition[] = [];

  // Modals
  isModalOpen: boolean = false;
  isRejectModalOpen: boolean = false;
  modalElement: PendingRequisition | null = null;
  rejectModalElement: PendingRequisition | null = null;
  rejectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rejectForm = this.fb.group({
      reason: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    // Using mock data instead of HTTP request
    // this.dataSource.data = this.mockData;
    // this.updatePagination();
    this.dataSource = new MatTableDataSource<PendingRequisition>(this.mockData);
    this.updatePagination();
  }

  trackByFn(index: number, item: any): any {
    return item.managerId;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setupDisplayColumns(): void {
    this.displayedColumns = [
      ...this.columns.map((c) => c.columnDef),
      'actions',
    ];
  }

  // Pagination methods
  updatePagination(): void {
    const sourceData = this.dataSource.data;
    this.totalItems = sourceData.length;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.paginatedData = this.getPaginatedData();
  }

  getPaginatedData(): PendingRequisition[] {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return [...this.dataSource.data].slice(startIndex, endIndex);
  }

  onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.currentPage = newPage;
      this.paginatedData = this.getPaginatedData();
    }
  }

  onPageSizeChange(event: any): void {
    this.pageSize = parseInt(event.target.value);
    this.currentPage = 0;
    this.updatePagination();
  }

  isPrevDisabled(): boolean {
    return this.currentPage <= 0;
  }

  isNextDisabled(): boolean {
    return this.currentPage >= this.totalPages - 1;
  }

  // Modal handling
  openModal(element: PendingRequisition): void {
    this.modalElement = element;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalElement = null;
  }

  openRejectModal(element: PendingRequisition): void {
    this.rejectModalElement = element;
    this.isRejectModalOpen = true;
    this.rejectForm.reset();
  }

  closeRejectModal(): void {
    // Add null check
    if (this.rejectModalElement) {
      this.rejectModalElement.status = 'Pending';
    }
    this.isRejectModalOpen = false;
    this.rejectModalElement = null;
    this.rejectForm.reset();
  }

  // Status handling
  onStatusChange(element: PendingRequisition, event: Event): void {
    const newStatus = (event.target as HTMLSelectElement).value;
    if (newStatus === 'Reject') {
      this.rejectModalElement = element;
      this.isRejectModalOpen = true;
      this.rejectForm.reset();
    } else {
      element.status = newStatus as 'Pending' | 'Approve' | 'Reject';
    }
  }

  onRejectStatusChange(element: PendingRequisition): void {
    if (this.rejectForm.valid && element) {
      element.status = 'Reject';
      // Add type assertion if needed
      (element as any).rejectionReason = this.rejectForm.get('reason')?.value;
      console.log('Rejection reason:', (element as any).rejectionReason);
      this.closeRejectModal();
    }
  }
}
