import {
  Component,
  AfterViewInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
interface PendingRequisitions {
  jobTitle: string;
  experience: string;
  managerID: string;
  managerName: string;
  requisitionDate: string;
  priority: string;
  status: string;
}

interface JobOpening {
  jobCode: string;
  jobTitle: string;
  jobLocation: string;
  experience: string;
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent implements AfterViewInit {
  @ViewChild('pendingRequisitions') pendingRequisitions!: TemplateRef<any>;
  @ViewChild('jobOpenings') jobOpenings!: TemplateRef<any>;

  tabs: Array<{ name: string; active: boolean; content: TemplateRef<any> }> =
    [];

  // Add flag to track if data is loaded
  isJobOpeningsDataLoaded = false;
  isPendingRequisitionsDataLoaded = false;

  ngAfterViewInit() {
    this.tabs = [
      {
        name: 'Pending Requisition',
        active: true,
        content: this.pendingRequisitions,
      },
      {
        name: 'Job Opening',
        active: false,
        content: this.jobOpenings,
      },
    ];
  }

  activateTab(tab: any) {
    this.tabs.forEach((t) => (t.active = false));
    tab.active = true;
  }

  // Modal
  isModalOpen = false;

  jobTitle = '';
  experience = '';
  noticePeriod = '';
  opportunityType = 'Oppertunity Type';
  location = '';
  jobType = 'Full-Time';
  jobSummary = '';
  keyResponsibilities = '';
  mustHaveSkills = '';
  additionalRequirements = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    console.log('Form Submitted:', {
      jobTitle: this.jobTitle,
      experience: this.experience,
      noticePeriod: this.noticePeriod,
      opportunityType: this.opportunityType,
      location: this.location,
      jobType: this.jobType,
      jobSummary: this.jobSummary,
      keyResponsibilities: this.keyResponsibilities,
      mustHaveSkills: this.mustHaveSkills,
      additionalRequirements: this.additionalRequirements,
    });
    this.closeModal();
  }

  constructor() {}
}
