import { Component, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalConstants } from '../../../shared/global-constants';
import { Asset } from '../../asset-management/asset-management.component';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrl: './edit-asset.component.scss'
})
export class EditAssetComponent implements OnInit , OnChanges{

 @Input() asset !: Asset;

triggerFileInput(input: HTMLInputElement) {
  input.click();
}



  assignee=['John Doe', 'Peter Parker' , 'Kevin' , 'william henry'];
  selectedOption:any;
  editForm!:FormGroup;
  uploadedAssetImages:string[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private fb: FormBuilder, private renderer: Renderer2,private elRef: ElementRef) { 

    this.editForm= this.fb.group({
      assetCategory:['', Validators.required],
      assetId: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      cost: ['', [Validators.required, Validators.pattern(GlobalConstants.numberRegex)]],
      warrentyExpiry: ['', Validators.required],
      assignee: ['', Validators.required],
      images: ['']


    })
  }
  ngOnChanges(changes: SimpleChanges): void {

   }

  onImageSelect(event: Event):void{

    const input = event.target as HTMLInputElement;
    const files = input.files as FileList;

    if(files){
      Array.from(files).forEach(file =>{
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.result){
            this.uploadedAssetImages.push(reader.result as string);
          }

      };
    reader.readAsDataURL(file);
      });

      this.editForm.patchValue({images: Array.from(files)});
      this.editForm.get('images')?.updateValueAndValidity();  
    }

  }

  removeImage(index:number){
    this.uploadedAssetImages.splice(index,1);

    const files=Array.from(this.editForm.get('images')?.value ||[]).filter(
      (_, i) => i !== index
    );

    this.editForm.patchValue({images: files});
    this.editForm.get('images')?.updateValueAndValidity();
  }
  ngOnInit(): void {

    this.uploadedAssetImages=[];
    console.log('====================================');
    console.log('data ' + JSON.stringify(this.data));
    console.log('====================================');
    
    this.editForm.patchValue({
      assetCategory:this.data.assetCategory,
      assetId: this.data.assetId,
      purchaseDate:this.data.purchaseDate,
      cost: this.data.cost,
      warrentyExpiry: this.data.warrentyExpiry,
      assignee: this.data.assignee,
      images: this.data.images
    });
  }



  saveAsset(editForm: FormGroup) {
   if(this.editForm.valid){
    const formData = new FormData();
    const files:File[] = this.editForm.get('images')?.value || [];

    files.forEach((image, index) => {
      formData.append(`file${index}`, image);

    })
    console.log('Form submitted', formData);
    console.log('====================================');
    console.log( 'uploadedAssetImages' + JSON.stringify(this.uploadedAssetImages));
   }

  }
}
