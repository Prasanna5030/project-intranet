import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { assets } from '../../../data/db';
import { AddAssetComponent } from '../dialog/add-asset/add-asset.component';
import { EditAssetComponent } from '../dialog/edit-asset/edit-asset.component';
import { UnassignComponent } from '../dialog/unassign/unassign.component';
import { ViewDetailsComponent } from '../dialog/view-details/view-details.component';
import { AssignComponent } from '../dialog/assign/assign.component';
import { MatSelectChange } from '@angular/material/select';
import { MatTabChangeEvent } from '@angular/material/tabs';





export interface Asset {
  assetId: string;
  assetCategory: string; 
  assetStatus: boolean;
  assignee: string | null;
  purchaseDate: string;
  cost : number;
  warrenty: string;
  currentAssignee: string;
  previousAssignee: string;
  assetImages: string;
  employeeId: number;
  employeeName: string;
  department:string;
  assignedOn: string;
  returnedOn: string;
}


@Component({
  selector: 'app-asset-management',
  templateUrl: './asset-management.component.html',
  styleUrl: './asset-management.component.scss',
  
  
})




export class AssetManagementComponent  implements OnInit, AfterViewInit{


  assets: Asset[] = assets;

selectedAsset!:Asset;
showEditAsset: boolean = false;

filterTableAssetCategories($event: Event,category: string) {
  $event.stopPropagation();
  this.assetsTableData1.filter= category;
}

filterTableAssetIds($event:Event , id: string) {
  $event.stopPropagation();
  this.assetsTableData1.filter= id;
}

filterTableDepartments($event:Event , department: string){
  $event.stopPropagation();
  this.assetsTableData1.filter= department;
}

  showDepartmentFilter:boolean =false;


matTabChange($event: MatTabChangeEvent) {
  if($event.tab.textLabel==='Assigned Assets'){
    this.showDepartmentFilter=true;
  }else{
    this.showDepartmentFilter=false;
  }

}


handlePropagation($event:Event) {
  $event.stopPropagation();

}

handleFilterClear() {
  this.assetIdControl.reset();
  this.assetCategoryControl.reset();
  this.departmentControl.reset();
  this.filteredAssetCategories=[...this.assetCategories];
  this.filteredAssetIds =[...this.assetIds];
  this.filteredDepartments=[...this.departments];
  this.assetsTableData1.filter=null;
}


  // state variable for implementing the filter options
  assetCategories = this.assets.map(asset=> asset.assetCategory);
  assetIds = this.assets.map(asset=> asset.assetId);
  departments= this.assets.map(asset=> asset.department);

  filteredAssetIds: string[] = this.assetIds;
  filteredAssetCategories: string[] = this.assetCategories;
  filteredDepartments: string[] = this.departments;

  assetCategoriesSelected:string[]=[];


  filterAssetId($event: Event) {
    const filterValue = ($event.target as HTMLInputElement).value as string;

    this.filteredAssetIds= this.assetIds.filter(asset => 
      asset.toLowerCase().includes(filterValue.toLowerCase())
    );

     }


    filterAssetCategories($event: Event) {
      const filterValue = ($event.target as HTMLInputElement).value as string;

    this.filteredAssetCategories = this.assetCategories.filter(asset =>
      asset.toLowerCase().includes(filterValue.toLowerCase())
    );      
    }


    filterDepartments($event: Event) {
      const filterValue = ($event.target as HTMLInputElement).value as string;

      this.filteredDepartments = this.departments.filter((asset)=>
      asset.toLowerCase().includes(filterValue.toLowerCase()))
    }


  assetCategoryControl= new FormControl([]);
  assetIdControl = new FormControl([]);
  departmentControl= new FormControl([]);







constructor(private router : Router , private dialog: MatDialog , private fb : FormBuilder){
  
}
  ngAfterViewInit(): void {
  
  }

ngOnInit(): void {
  this.assetsTableData1 = new MatTableDataSource<any>(assets);
  this.assetsTableData2 = new MatTableDataSource<any>(assets);
  this.assetsTableData3 = new MatTableDataSource<any>(assets);
  this.assetsTableData1.paginator = this.paginator1;
  this.assetsTableData2.paginator = this.paginator2;
  this.assetsTableData3.paginator = this.paginator3;
}


@ViewChild('paginator1' , {static : true}) paginator1!: MatPaginator;
@ViewChild('paginator2'  , {static : true}) paginator2!: MatPaginator;
@ViewChild('paginator3'  , {static : true}) paginator3!: MatPaginator;

displayedColumns: string[] = ['assetCategory' ,  'assetId' , 'warrenty', 'assetStatus' , 'assignee', 'actions'];
assignedDisplayColumns: string[]=['assetCategory' ,'assetId' , 'assigneeId' , 'assignee' , 'department' , 'assignedDate' , 'actions'];
unAssignedDisplayColumns: string[] =['assetCategory' , 'assetId' , 'purchaseDate' , 'warrenty' , 'previousAssignee' , 'returnedOn' , 'actions'];

assetsTableData1:any;
assetsTableData2:any;
assetsTableData3:any;

pageSize: any;
onPageSizeChange(arg0: any) {
throw new Error('Method not implemented.');
}

searchTerm: any;
applyFilter(){
  this.assetsTableData1.filter = this.searchTerm.trim().toLowerCase();
  this.assetsTableData2.filter = this.searchTerm.trim().toLowerCase();
  this.assetsTableData3.filter = this.searchTerm.trim().toLowerCase();
}


handleAddNewAsset() {
  const addNewAssetConfig = new MatDialogConfig();
  addNewAssetConfig.panelClass='custom-dialog-container';
  const dialogRef= this.dialog.open(AddAssetComponent, addNewAssetConfig);
  }
  

handleViewDetailsAction(asset:  Asset) {
  const viewDetailsDialogConfig = new MatDialogConfig();
   viewDetailsDialogConfig.panelClass='custom-dialog-container';
   viewDetailsDialogConfig.data= asset;
   
   const dialogRef=  this.dialog.open(ViewDetailsComponent,viewDetailsDialogConfig);

 
 
 
 }
 handleUnassignAction(asset: Asset) {
  
     const unAssignDialogConfig = new MatDialogConfig();
 
     unAssignDialogConfig.panelClass = 'custom-dialog-container';
 
     unAssignDialogConfig.data = asset;
 
     const dialogRef= this.dialog.open(UnassignComponent, unAssignDialogConfig);
 }
handleEditAction(asset: Asset) {
  this.showEditAsset=true;
  this.selectedAsset = asset;
   const editAssetConfig = new MatDialogConfig();
   editAssetConfig.panelClass = 'custom-dialog-container';
   editAssetConfig.data = asset;

   const dialogRef = this.dialog.open(EditAssetComponent, editAssetConfig);
  //  dialogRef.afterClosed().subscribe(result => {
  //   if (result) {
  //     this.assetsData.data = this.assetsData.data.map((asset: Asset) => {
  //       if (asset.id === result.id) {
  //         return result;
  //         }
  //         }
}




handleAssignAsset(asset: Asset) {
    const assignAssetConfig = new MatDialogConfig();
    assignAssetConfig.panelClass = 'custom-dialog-container';
    assignAssetConfig.data = asset;
    const dialogRef= this.dialog.open(AssignComponent , assignAssetConfig);

  }
  handleViewDetails(_t378: any) {
  throw new Error('Method not implemented.');
  }


  // filtering assets based on the selected asset type & asset id

  onAssetIdChange() {
    const selectedAssetIds = this.assetIdControl.value;

    this.filteredAssetIds= this.assetIds.filter((id)=>
    selectedAssetIds?.some((category: string)=> id.startsWith(category) || id.includes(category)));

    console.log('====================================');
    console.log('filtered assets id :' + this.filteredAssetIds);
    console.log('====================================');
    
    }
    onAssetCategoryChange(event : MatSelectChange) {
      
 
      const selectedAssetCategories= this.assetCategoryControl.value;
      this.filteredAssetCategories = this.assetCategories.filter((id) =>
        selectedAssetCategories?.some((category: string) => id.startsWith(category) || id.includes(category))
      );
      
      console.log('====================================');
      console.log( 'filtered assets '+this.filteredAssetCategories);
      console.log('====================================');
    }

    onDepartmentChange() {
      const selectedDepartments = this.departmentControl.value;
      this.filteredDepartments= this.departments.filter((id)=>
      selectedDepartments?.some((department: string)=> id.startsWith(department) || id.includes(department)));
      console.log('====================================');
      console.log(this.filteredDepartments);
      console.log('====================================');
      }
}
