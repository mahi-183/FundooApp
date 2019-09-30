import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Service/NotesService/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  userId;
  notesArray;
  noteType;
  constructor(private notesService:NotesService, private router:Router) { }

  ngOnInit() {
    this.GetAllNotes();
  }
  
  /**
   * get all notes 
   */
  GetAllNotes(){
    console.log("inside the notes component");
    this.userId = localStorage.getItem('UserId');
    this.noteType = 0;
     this.notesService.getAllNotes(this.userId,this.noteType).subscribe(response=>{
      console.log("the notes data", response);
      this.notesArray = response;
      console.log("notes array",this.notesArray);
      // this.router.navigate(['dashboard/display']);
    });
  }

  /**
   * get all notes when the color or image or note type is set
   * @param object object is the type which is empty
   */
  update(object){
    if (object.type == 'update') {
      console.log("inside update notes")
      this.GetAllNotes();
      }
  }
}
