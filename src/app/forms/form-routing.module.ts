import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsComponent } from "./forms.component";
import { AllFormsComponent } from "./all-forms/all-forms.component";


const routes: Routes=[
    { path : '' , component: FormsComponent ,children :[
        {
            path : 'all-forms' , component : AllFormsComponent 
        }
    ]}
]

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(routes)]
})
export class FormRoutingModule{}