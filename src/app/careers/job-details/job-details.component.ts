import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

interface JobData {
  title: string;
  experience: string;
  noticePeriod: string;
  opportunityType: string;
  location: string;
  jobType: string;
  responsibilities: string[];
  skills: string[];
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent {
  constructor(
    private location: Location,
    private router: Router // Add 'private' modifier
  ) {}

  jobData: JobData = {
    title: 'Sr. Digital Analyst',
    experience: '7+ years',
    noticePeriod: 'Within 30 days',
    opportunityType: 'Work from Office',
    location: 'Bangalore, IN',
    jobType: 'Full time',
    responsibilities: [
      'Design and implementation of data collection strategies across various digital platforms (website, mobile app, etc.) using tools like Google Tag Manager (GTM)and expert knowledge of GA360/GA4 configuration.',
      'Work on the integration of data from a wider Google Marketing Platform (GMP) stack, including ADH, DV360, and SA360.',
      'Manage data pipelines and ensure clean data ingestion into Google Cloud Platform (GCP) tools like BigQuery.',
      'Work with developers to understand website technology (JS, CMS, Single Page Applications, iframes) and ensure proper data capture.',
      'Develop and deliver clear, concise, and insightful reports.',
      'Mentor and guide junior digital analysts, fostering a collaborative and knowledge-sharing environment.',
    ],
    skills: [
      '7+ years of experience in the field of digital analytics.',
      'Requires Project Management skills with the ability to work independently.',
      'Should be an Expert in JavaScript.',
      'Should be an Expert in GTM',
      'Mush have an Expert knowledge of GA360 and GA4 configuration.',
      'Should have a strong understanding of the wider GMP stack, including ADH, DV360, and SA360.',
      'Experience with Google Cloud - Big Query, App Engine/Cloud Run.',
      'Strong understanding of website technology (JS, CMS, Single Page Apps, iframes).',
      'Experience with Firebase.',
      'Experience with API concepts/data integrators.',
    ],
  };

  onJobViewApplication(): void {
    this.router.navigate(['careers/view-applications']);
  }

  goBack(): void {
    this.location.back();
  }
}
