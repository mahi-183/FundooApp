import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../../Service/NotesService/notes.service';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss']
})
export class LabelDialogComponent implements OnInit {
  notesLabel:any;
  userId: any;
  
  @Output() AfterAddEvent = new EventEmitter();
  constructor(public dialogRef: MatDialogRef<LabelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private notesService:NotesService) { }
  
  //form control data 
  label = new FormControl('');

  ///hook life cycle interface method implemntation 
  ngOnInit() {
    this.userId = localStorage.getItem('UserId')
    this.notesLabel=this.data
  }

  delete(label){
    // this.notesService.deletelabel(label.id).subscribe(result =>{
    //   console.log(result) 
    // });
  }
  
  update(label){

    console.log("inside label dialog update label value:",label);
    // this.notesService.updateLabel(lebel.id,label.label).subscribe(response=>{
    //   console.log("response after label updated:",response);
    // })
  }

  close(){
    var data ={
      "Label":this.label.value,
      "UserId":this.userId
    }
    
    console.log("inside the close button in label dialog ts",data);
    // this.notesService.AddLabels(this.userId,data).subscribe(result=>
    //   console.log(data) 
    //  )

    this.dialogRef.close(data);
    // this.AfterAddEvent.emit({});
  }

}
