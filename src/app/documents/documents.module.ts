import { NgModule } from "@angular/core";
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { PayslipsComponent } from './payslips/payslips.component';
import { ReviewLettersComponent } from './review-letters/review-letters.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { Form16Component } from './form-16/form-16.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { DeclarationFormsComponent } from './declaration-forms/declaration-forms.component';
import { DocumentsRoutingModule } from "./documents-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedMaterialModule } from "../shared/shared-material.module";
import { RouterModule } from "@angular/router";
import { AllReviewsComponent } from './review-letters/all-reviews/all-reviews.component';
import { AllPayslipsComponent } from './payslips/all-payslips/all-payslips.component';
import { AllInsuranceComponent } from './insurance/all-insurance/all-insurance.component';
import { AllForm16Component } from './form-16/all-form16/all-form16.component';
import { AllDeclarationFormsComponent } from './declaration-forms/all-declaration-forms/all-declaration-forms.component';
import { AllReimbursementComponent } from './reimbursement/all-reimbursement/all-reimbursement.component';


@NgModule({
    declarations: [
    MyDocumentsComponent,
    PayslipsComponent,
    ReviewLettersComponent,
    InsuranceComponent,
    Form16Component,
    ReimbursementComponent,
    DeclarationFormsComponent,
    AllReviewsComponent,
    AllPayslipsComponent,
    AllInsuranceComponent,
    AllForm16Component,
    AllDeclarationFormsComponent,
    AllReimbursementComponent
  ],
    imports:[
        CommonModule,
        DocumentsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        RouterModule
    ],
    exports: [],
})
export class DocumentsModule{}