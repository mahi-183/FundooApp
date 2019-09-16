import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../../Service/NotesService/notes.service';
import { notes } from '../../Model/notes';

@Component({
  selector: 'app-take-a-note',
  templateUrl: './take-a-note.component.html',
  styleUrls: ['./take-a-note.component.scss']
})
export class TakeANoteComponent implements OnInit {
  toggle:boolean=false;
  note: notes  = new notes();
  noteColor;
  noteType;
  constructor(private notesService:NotesService) { }

  title = new FormControl('',[Validators.required])
  description = new  FormControl('',[Validators.required])
  ngOnInit() {
    // this.addNoteForm = this.formBuilder.group({
    //   title: ['',Validators.required],
    //   description:['',Validators.required]
    // });
    }
  AddNotes(){
    this.toggle=false;
    let data = {
      userId: localStorage.getItem('UserId'),
      title:this.title.value,
      description:this.description.value,
      color:this.noteColor
    }
    console.log('data..........', data);
   if(data!=null){
      console.log("iside if condition",data);
      this.notesService.AddNotes(data).subscribe(response=>
        {
          console.log("inside notes service", response);
           // this.clearFilters()
           this.title.reset();
           this.description.reset();
           this.noteColor='';
       //   this.router.navigate(['/dashboard/notes']);
        })
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
    console.log($event, "color")
    this.setNoteType = $event
  }
}
