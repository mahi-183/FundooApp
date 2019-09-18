import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Core/Service/NotesService/notes.service';
import { DataService } from 'src/app/Core/Service/DataService/data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue;
  userId;
  searchNoteArray;
  constructor(private notesService:NotesService, private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.searchValue = message)
   console.log("search note value",this.searchValue)
    this.getAllSearchNotes()
  }

  getAllSearchNotes(){
    this.userId = localStorage.getItem('UserId');
    console.log("userId inside search component.ts",this.userId);
    
    console.log("inside getAllsearchNotes function");
    this.notesService.SearchNotes(this.userId, this.searchValue).subscribe(response=>{
      console.log("response",response);
      this.searchNoteArray=response['result'];
      console.log("search array response",response['result'])
      console.log("search array",this.searchNoteArray)
    })
  }
}
