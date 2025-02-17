import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "../shared/shared-material.module";
import { ActionCenterRoutingModule } from "./action-center-routing.module";
import { ActionCenterComponent } from "./action-center/action-center.component";
import { AnnualReviewsComponent } from './annual-reviews/annual-reviews.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { InitiateReviewComponent } from './dialog/initiate-review/initiate-review.component';
import { InitiateTaskComponent } from './dialog/initiate-task/initiate-task.component';
import { RequestApprovalComponent } from './dialog/request-approval/request-approval.component';
import { ExitTasksComponent } from './exit-tasks/exit-tasks.component';
import { OffersPromotionComponent } from './offers-promotion/offers-promotion.component';
import { PerformanceReviewsComponent } from './performance-reviews/performance-reviews.component';

@NgModule({
    declarations:[
        ActionCenterComponent,
        ExitTasksComponent,
        PerformanceReviewsComponent,
        OffersPromotionComponent,
        AnnualReviewsComponent,
        InitiateTaskComponent,
        CreateFormComponent,
        RequestApprovalComponent,
        InitiateReviewComponent
       
    ],
    imports:[
        CommonModule,
        ActionCenterRoutingModule,
        RouterModule,
        SharedMaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[]
})
export class ActionCenterModule{}