import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../Service/NotesService/notes.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() childMessageIcon;
  @Input() hideIcon;
  toggle:boolean=false;
  // message;
  ///emmited the selected notes color
  @Output() selectedColor = new EventEmitter();
  constructor(private notesService:NotesService, private snackbar:MatSnackBar) { }
  colorArray : any[] = [
    [
      {color:"#f06292"},
      {color:"#81D4FA"},
      {color:"#a5d6a7"}
    ],
    [
      {color:"#ce93d8"},
      {color:"#bdbdbd"},
      {color:"#FFE57F"},
      {color:"#00BCD4"}
    ]
  ]
  ngOnInit() {
  }

  mainMatMenu()
  {
    toggle:true;
  }
  mainMatMenuRestore(){
    toggle:false;
  }
  setcolor(color: any) {
    ////check childMessage data is undefined or not
    if(this.childMessageIcon == undefined){
        console.log("inside card data",this.childMessageIcon);
        this.selectedColor.emit(color);
    }
    else{
    var data = {
      "color":this.childMessageIcon.color,
      "id":this.childMessageIcon.id
    }

    this.notesService.updateNotes(this.childMessageIcon.id, data).subscribe(data =>{
      this.selectedColor.emit(color);
      this.snackbar.open("Set Color Successfull","undo",
      { duration: 5000 });
    },
    err=>{
      this.snackbar.open("Set Color Successfull","undo",
      { duration: 5000 });
    })
  }
  }

  Trash(){
    this.childMessageIcon.noteType=1;
    var data = {
      "id":this.childMessageIcon.id,
      "noteType":1
    }
    
    this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(response=>
      {
        this.snackbar.open("Note Trashed","undo",
          { duration: 5000 }
          )
      }),error=>{
        this.snackbar.open("Note Not trashed","undo",
          { duration: 5000 }
          )
      }
  }

  Archive(){
    this.childMessageIcon.noteType=2;
    var data = {
      "id":this.childMessageIcon.id,
      "noteType":2
    }
    
    this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(response=>
      {
        
        console.log("archive response:",response);
        this.snackbar.open("moved note to archive","undo",
          { duration: 5000 }
          )
      }),error=>{
        this.snackbar.open("notes not moved to archive","undo",
          { duration: 5000 }
          )
      }
  }

  Restore(){
    this.childMessageIcon.noteType=0;
    var data = {
      "id":this.childMessageIcon.id,
      "noteType":0
    }
    
    this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(response=>
      {
        
        console.log("archive response:",response);
        this.snackbar.open("notes restored successfully","undo",
          { duration: 5000 }
          )
      }),error=>{
        this.snackbar.open("notes not moved to archive","undo",
          { duration: 5000 }
          )
      }
  }
  DeleteForever(){
    var data = {
      "id":this.childMessageIcon.id
    }
    
    this.notesService.deleteNotes(this.childMessageIcon.id).subscribe(response=>
      {
        
        console.log("delete notes response:",response);
        this.snackbar.open("notes deleted successufully","undo",
          { duration: 5000 }
          )
      }),error=>{
        this.snackbar.open("notes not deleted","undo",
          { duration: 5000 }
          )
      }
  }

  Today(childMessageIcon){
    console.log("card data",childMessageIcon);
    
    var date = new Date();
    date.setHours(20,0,0)
    childMessageIcon.reminder = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(data =>{
      console.log(data);
      // this.update.emit({});
    },err =>{
      console.log(err);
    })
  }
  Tomorrow(childMessageIcon){

  }
  nextWeek(childMessageIcon){

  }
}
