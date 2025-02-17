import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('overview') overview!: TemplateRef<any>;
  @ViewChild('employeeAnalytics') employeeAnalytics!: TemplateRef<any>;
  @ViewChild('attendanceAnalytics') attendanceAnalytics!: TemplateRef<any>;
  @ViewChild('expenseAnalytics') expenseAnalytics!: TemplateRef<any>;
  @ViewChild('assetManagementAnalytics')
  assetManagementAnalytics!: TemplateRef<any>;

  tabs: Array<{ name: string; active: boolean; content: TemplateRef<any> }> =
    [];

  ngAfterViewInit() {
    this.tabs = [
      { name: 'Overview', active: true, content: this.overview },
      {
        name: 'Employee Analytics',
        active: false,
        content: this.employeeAnalytics,
      },
      {
        name: 'Attendance & Leave Analytics',
        active: false,
        content: this.attendanceAnalytics,
      },
      {
        name: 'Expense Analytics',
        active: false,
        content: this.expenseAnalytics,
      },
      {
        name: 'Asset Management Analytics',
        active: false,
        content: this.assetManagementAnalytics,
      },
    ];
  }

  activateTab(tab: any) {
    this.tabs.forEach((t) => (t.active = false));
    tab.active = true;
  }
}
