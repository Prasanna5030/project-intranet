import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrl: './add-asset.component.scss'
})
export class AddAssetComponent implements OnInit{

  addNewAssetForm!:FormGroup;
  uploadedAssetImages:string[]=[];


  categories = ['iPhone', 'Monitor', 'Tablet', 'Laptop (Mac)', 'Laptop (Windows)', 'SIM Card'];

  filteredCategories= [...this.categories];
 // searchCategory='';
  newCategory=new FormControl('');

  assignee=['John Doe', 'Peter Parker' , 'Kevin' , 'william henry'];
  filteredAssignee=[...this.assignee];
  searchAssignee='';



  constructor(private fb : FormBuilder ){
   

  }

 

  addAssetCategory(){
    this.assetCategories.push(this.fb.group({ value : '' }));
  }


  filterCategories(event: Event):void{
    console.log('====================================');
    console.log('filtered categories before' + this.filteredCategories);
    console.log('====================================');
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
   
    this.filteredCategories = this.categories.filter(category =>
      category.toLowerCase().includes(filterValue)
    );

    console.log('====================================');
    console.log('filtered categories after' + this.filteredCategories);
    console.log('====================================');
  }


  filterAssignee(event: Event){
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredAssignee= this.assignee.filter(assignee=>{
      return assignee.toLowerCase().includes(filterValue);
    })
  }


  // get assetImages(): FormArray {
  //   return this.addNewAssetForm.get('assetImage') as FormArray;
  // }

  // addImage(){
  //   this.assetImages.push(this.fb.group({ value : ''}))
  // }

  // removeImage(index: number){
  //   this.assetImages.removeAt(index);
  //   if (this.uploadedAssetImages && this.uploadedAssetImages.length > index) {
  //     this.uploadedAssetImages.splice(index, 1);
  //   }
  // }


 
    // onFileChange($event: Event,index : number) {
    //   const input = $event.target as HTMLInputElement;

    //   if (input.files && input.files.length > 0) {
    //     const file = input.files[0];
    //     if (!this.uploadedAssetImages) {
    //       this.uploadedAssetImages = [];
    //     }
    //     this.uploadedAssetImages[index] = file;
    //   }
    
    // }

  ngOnInit(): void {


    this.addNewAssetForm= this.fb.group({
      assetCategory: this.fb.array([]),
      assetId : ['', Validators.required],
      purchaseDate : ['', Validators.required],
      cost : ['', Validators.required],
      warrentyExpiryDate : ['', Validators.required],
      assignee: ['', Validators.required],
      images:['']
    });


    this.categories.forEach(category=>this.addCategoryToFormArray(category));
   
  }


  get assetCategories(): FormArray{
    return this.addNewAssetForm.get('assetCategory') as FormArray;
  }

  addCategoryToFormArray(category: string){
    this.assetCategories.push(this.fb.group({ value: [category, Validators.required]}))
  }


  addNewCategory(event: Event): void {
    event.stopPropagation();
    
    const newCategory = this.newCategory.value?.trim();
    if (newCategory && !this.categories.includes(newCategory)) {
      this.categories.push(newCategory);
      this.filteredCategories.push(newCategory);
      // this.addCategoryToFormArray(newCategory);
      this.newCategory.reset();
    }
  }


  // Add selected category to the FormArray
  selectCategory(category: string){
   const index= this.categories.indexOf(category);

   if(index!== -1){
    this.addNewAssetForm.patchValue({assetCategory: category})
   }

  }

  removeCategory(index:number){
    this.assetCategories.removeAt(index);
  }

  triggerFileInput(input : HTMLInputElement) {
    input.click();
   
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
  
        this.addNewAssetForm.patchValue({images: Array.from(files)});
        this.addNewAssetForm.get('images')?.updateValueAndValidity();  
      }
  
    }
  


    removeImage(index:number){
      this.uploadedAssetImages.splice(index,1);
  
      const files=Array.from(this.addNewAssetForm.get('images')?.value ||[]).filter(
        (_, i) => i !== index
      );
  
      this.addNewAssetForm.patchValue({images: files});
      this.addNewAssetForm.get('images')?.updateValueAndValidity();
    }

  handleSaveAssset(form: FormGroup) {
     
    if(this.addNewAssetForm.valid){
      const formData = new FormData();
      const files:File[] = this.addNewAssetForm.get('images')?.value || [];
  
      files.forEach((image, index) => {
        formData.append(`file${index}`, image);
  
      })
      console.log('Form submitted', formData);
      console.log('====================================');
      console.log( 'uploadedAssetImages' + JSON.stringify(this.uploadedAssetImages));
     }
    }


    onDropdownOpened(isOpen: boolean): void {
      if (isOpen) {
        // Perform actions like focusing on the input field
        setTimeout(() => {
          const searchInput = document.querySelector('input[placeholder="Search categories"]') as HTMLInputElement;
          if (searchInput) {
            searchInput.focus();
          }
        });
      }
    }

    
}
