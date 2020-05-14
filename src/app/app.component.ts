import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blue = false;
  red = false;
  green = false;
  yellow = false;
  orange = false;
  pink = false;
  constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: {name: "Aaron"}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');

  //   });
  // }

  openDialog(color): void {
    console.log("AppComponent -> openDialog -> color", color)
    /* Opens a model which contains the AddCategoriesModalComponent defined below */

    if(color == 'blue') {
      console.log("AppComponent -> openDialog -> color", color)
      this.blue = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '90rem',
        height: '20rem',
        data: { topic: "My Dog"}
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    } else if (color == 'red') {
      this.red = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '90rem',
        height: '20rem',
        data: { topic: "My Cat"}
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else if (color == 'pink') {
      this.pink = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '90rem',
        height: '20rem',
        data: { topic: "My Dog"}
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else if (color == 'yellow') {
      this.yellow = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '90rem',
        height: '20rem',
        data: { topic: "My Dog"}
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else if (color == 'orange') {
      this.orange = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '90rem',
        height: '20rem',
        data: { topic: "My Dog"}
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    } else {
      this.green = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '90rem',
        height: '20rem',
        data: { topic: "My Dog"}
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }

    /* Runs when the modal ref created above closes
     * using this functionality to run successful API calls
     * If the call is successful, it will make a call to close the api
     * with "refresh" as a param, so this function checks if the param is refresh
     * and reloads the table.
     *
     * Snackbar is also created on success
     */

  }
}
