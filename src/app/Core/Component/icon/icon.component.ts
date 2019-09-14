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
  @Input() childMessageTrash;
  message;
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
        this.snackbar.open("moved note to trash","undo",
          { duration: 5000 }
          )
      }),error=>{
        this.snackbar.open("notes not moved to trash","undo",
          { duration: 5000 }
          )
      }
  }
}
