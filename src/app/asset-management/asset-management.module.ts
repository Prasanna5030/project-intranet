import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedMaterialModule } from "../shared/shared-material.module";
import { AssetManagementComponent } from "./asset-management/asset-management.component";
import { AssetManagementRoutingModule } from "./asset-managenent-routing.module";
import { AddAssetComponent } from './dialog/add-asset/add-asset.component';
import { EditAssetComponent } from './dialog/edit-asset/edit-asset.component';
import { UnassignComponent } from './dialog/unassign/unassign.component';
import { ViewDetailsComponent } from './dialog/view-details/view-details.component';
import { AssignComponent } from './dialog/assign/assign.component';

@NgModule({
    declarations:[AssetManagementComponent, ViewDetailsComponent, EditAssetComponent, UnassignComponent, AddAssetComponent, AssignComponent],
    exports:[],
    imports:[
        CommonModule,
        SharedMaterialModule,
        AssetManagementRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class AssetManagementModule{}