import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', // Default child route of /dashboard/home
    component: HomeComponent,
    // redirectTo: 'overview', // Redirect to OverviewComponent
    // pathMatch: 'full',
  },
  {
    path: 'overview', // Route for OverviewComponent
    component: HomeComponent, // Render OverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
