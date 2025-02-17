import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActionCenterComponent } from "./action-center/action-center.component";
import { ExitTasksComponent } from "./exit-tasks/exit-tasks.component";
import { PerformanceReviewsComponent } from "./performance-reviews/performance-reviews.component";
import { OffersPromotionComponent } from "./offers-promotion/offers-promotion.component";
import { AnnualReviewsComponent } from "./annual-reviews/annual-reviews.component";
import { CreateFormComponent } from "./create-form/create-form.component";



const routes: Routes = [
    { path: '', redirectTo: 'exit-tasks', pathMatch: 'full' },
    {
        path: '', component: ActionCenterComponent, children: [
            { path: 'exit-tasks', component: ExitTasksComponent },
            {
                path: 'performance-reviews', component: PerformanceReviewsComponent
                , children: [
                    { path: 'annual-reviews', component: AnnualReviewsComponent },
                    { path: 'create-form', component: CreateFormComponent }
                ]
            },
            { path: 'offers-promotions', component: OffersPromotionComponent },

        ]
    },



]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActionCenterRoutingModule { }

