import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar ) { 

   }

   openSnackBar(message: string, action : string){

    let panelClass = 'green-snackbar'; // Default to green

    if (action === 'error') {
      panelClass = 'black-snackbar';
    }
  
    this.snackbar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000,
      panelClass: [panelClass],
    });
  } 
}
