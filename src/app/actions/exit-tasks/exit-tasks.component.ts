import { Component, signal } from '@angular/core';
import {employee, SCHEMA } from '../../_model/exit-task';

@Component({
  selector: 'app-exit-tasks',
  templateUrl: './exit-tasks.component.html',
  styleUrl: './exit-tasks.component.scss'
})
export class ExitTasksComponent {

  
setPanelState(index: number , isOpen :boolean) {
 this.selectedPanelIndex = isOpen ? index : null;
}

  selectedPanelIndex: number | null = null;
  activeIndex : number | null =null;
  isPanelActive=false;
  empData=SCHEMA;
   message: any;

   isUserSelected :boolean =false;
  selectedUser: any = null;

  selectUser(emp: employee){
    
    this.selectedUser =emp;
    console.log('====================================');
    console.log(this.selectedUser);

    if(this.selectedUser!=null){
      this.isUserSelected=true;
    }
    console.log('====================================');
  }

  clearSelectedUser(){
    this.selectedUser=null;
  }

  filteredData:any=[...this.empData];
applyFilter() {
  const filterValue = this.searchTerm.trim().toLowerCase();

  this.filteredData = this.empData.filter(emp=>emp.employeeName.toLowerCase().includes(filterValue));
  console.log(this.filteredData);
}
searchTerm:any;

readonly panelOpenState = signal(false);


setActiveIndex(index :number){
  this.activeIndex = index;
}

}
