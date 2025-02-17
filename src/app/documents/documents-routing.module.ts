import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyDocumentsComponent } from "./my-documents/my-documents.component";
import { ReviewLettersComponent } from "./review-letters/review-letters.component";
import { InsuranceComponent } from "./insurance/insurance.component";
import { Form16Component } from "./form-16/form-16.component";
import { PayslipsComponent } from "./payslips/payslips.component";
import { DeclarationFormsComponent } from "./declaration-forms/declaration-forms.component";
import { ReimbursementComponent } from "./reimbursement/reimbursement.component";
import { AllReviewsComponent } from "./review-letters/all-reviews/all-reviews.component";
import { AllPayslipsComponent } from "./payslips/all-payslips/all-payslips.component";
import { AllInsuranceComponent } from "./insurance/all-insurance/all-insurance.component";
import { AllForm16Component } from "./form-16/all-form16/all-form16.component";
import { AllDeclarationFormsComponent } from "./declaration-forms/all-declaration-forms/all-declaration-forms.component";
import { AllReimbursementComponent } from "./reimbursement/all-reimbursement/all-reimbursement.component";


const routes: Routes=[
    { path:'', component: MyDocumentsComponent},
        { path:'review-letters' , component: ReviewLettersComponent ,children:
          [
                // { path: '', redirectTo: 'all', pathMatch: 'full' }, 
                { path: 'all', component: AllReviewsComponent },
              ]
            },
        { path: 'insurance' , component: InsuranceComponent, children:[
            { path: 'all', component: AllInsuranceComponent}
        ]},
        { path: 'form-16', component: Form16Component , children:[
            {path : 'all', component: AllForm16Component}
        ]},
        { path: 'payslips', component: PayslipsComponent, children:
            [
                { path: 'all', component: AllPayslipsComponent },
            ]},
        { path: 'declaration-forms', component: DeclarationFormsComponent, children:[
            {path : 'all', component: AllDeclarationFormsComponent}
        ]},
        { path: 'reimbursement' , component: ReimbursementComponent, children:[
            {path : 'all', component: AllReimbursementComponent}
        ] }
    ,
   

]



@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DocumentsRoutingModule{
    static allRoutes= routes;
}