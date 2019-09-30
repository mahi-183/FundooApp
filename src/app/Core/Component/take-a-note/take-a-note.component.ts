import { Component, OnInit, Output } from '@angular/core';
import { Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../../Service/NotesService/notes.service';
import { notes } from '../../Model/notes';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-take-a-note',
  templateUrl: './take-a-note.component.html',
  styleUrls: ['./take-a-note.component.scss']
})
export class TakeANoteComponent implements OnInit {
  toggle:boolean=false;
  note: notes  = new notes();
  noteColor;
  //noteType;
  setTypeNote: any;
  setImageToNote:any;
  @Output() AferCloseEvent = new EventEmitter<any>();
  constructor(private notesService:NotesService, private router: Router) { }

  title = new FormControl('',[Validators.required])
  description = new  FormControl('',[Validators.required])
  ngOnInit() {

    }

    /**
     * add new notes
     */
  AddNotes(){
        this.toggle=false;
        let data = {
          userId: localStorage.getItem('UserId'),
          title:this.title.value,
          description:this.description.value,
          color:this.noteColor,
          noteType: this.setTypeNote,
          image:this.setImageToNote
        }
    
        console.log('data..........', data);
        if(this.noteColor != undefined || this.description.value != "" || this.title.value != "" || this.setImageToNote != undefined)
        {
            console.log("Inside if condition",data);
            this.notesService.AddNotes(data).subscribe(response=>{
            console.log("inside notes service", response);
            this.title.reset();
            this.description.reset();
            this.noteColor='';
            this.setImageToNote=null;
            this.AferCloseEvent.emit({type: 'update', data: []});
            },error=>{
              console.log("error",error);
            });
        }
        else{
          console.log("notes not added successfuly")
        }
    }

  openMainMatCard(){
    this.toggle=true;
   }

  setcolor($event) {
    console.log($event, "color")
    this.noteColor = $event
  }
  
  setNoteType($event) {
    console.log($event, "noteType")
    this.setTypeNote = $event
  }

  setImage($event) {
    console.log($event, "image in create note")
    this.setImageToNote = $event
    console.log("setImageToNote",this.setImageToNote);
  }
}
