import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Service/NotesService/notes.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashNotesArray:any=[];
  userId;
  noteType;
  constructor(private notesService:NotesService, private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.GetAllTrashNotes();
  }
 
  GetAllTrashNotes(){
    console.log("inside the trash notes component");
     this.userId = localStorage.getItem('UserId');
    this.noteType = 1;
    this.notesService.getAllNotesByType(this.userId,this.noteType).subscribe(response=>{
      console.log("the notes data", response);
      this.trashNotesArray = response;
      console.log("notes array",this.trashNotesArray);
      this.snackbar.open("notes move to trash succeffully",
      "undo",
      { duration: 5000 }
      )
    });
  }

}
