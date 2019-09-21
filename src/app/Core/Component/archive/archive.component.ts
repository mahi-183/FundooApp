import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotesService } from '../../Service/NotesService/notes.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
userId;
noteType;
archiveNotesArray;
@Output() archiveUpdate = new EventEmitter();
  constructor(private noteService:NotesService, private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.GetAllArchiveNotes();
  }
 
  GetAllArchiveNotes(){
    try{
      console.log("inside the archive notes component");
      this.userId = localStorage.getItem('UserId');
     this.noteType = 2;
     this.noteService.getAllNotesByType(this.userId,this.noteType).subscribe(response=>{
       console.log("the notes data", response);
       this.archiveNotesArray = response;
       console.log("notes array",this.archiveNotesArray);
       this.snackbar.open("notes move to trash succeffully",
       "undo",
       { duration: 5000 }
       )
     });    
    }
    catch(error)
    {
      console.log("error");
    }
  }
  Archived($event)
  {
     
  }
}
