import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { PollComponent } from './post-poll/poll/poll.component';
import { PostComponent } from './post-poll/post/post.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    OverviewComponent,
    PollComponent,
    PostComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
