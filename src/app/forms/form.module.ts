import { NgModule } from "@angular/core";
import { FormsComponent } from "./forms.component";
import { AllFormsComponent } from "./all-forms/all-forms.component";
import { SharedMaterialModule } from "../shared/shared-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormRoutingModule } from "./form-routing.module";



@NgModule({
    declarations : [FormsComponent , AllFormsComponent],
    imports : [
        CommonModule ,
        SharedMaterialModule,
        FormsModule ,
        ReactiveFormsModule,
        RouterModule
    ],
    exports : [FormRoutingModule]
})
export class FormModule{}