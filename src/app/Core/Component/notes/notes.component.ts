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
  constructor(private notesService:NotesService, private router:Router) { }

  ngOnInit() {
    this.GetAllNotes();
  }
  
  GetAllNotes(){
    console.log("inside the notes component");
     this.userId = localStorage.getItem('UserId');
    this.notesService.getAllNotes(this.userId).subscribe(response=>{
      console.log("the notes data", response);
      this.notesArray = response;
      console.log("notes array",this.notesArray);
      // this.router.navigate(['dashboard/display']);
    });
  }
}
