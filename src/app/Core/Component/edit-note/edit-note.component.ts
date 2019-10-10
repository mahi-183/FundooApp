import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  note:any
  constructor(public dialogRef: MatDialogRef<DisplayComponent>,@Inject(MAT_DIALOG_DATA) public data: any) 
  {
    console.log("inside edit note component",data);
    this.note = data;
    console.log("note id",this.note.id);
    
    console.log("note data",this.note);
    
   }

  ngOnInit() {
  }
  
  onNoClick()
  {
    console.log("after close event in edit component", this.note)
   this.dialogRef.close(this.note);
  }
}
