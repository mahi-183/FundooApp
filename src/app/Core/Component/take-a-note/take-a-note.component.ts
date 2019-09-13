import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  addNoteForm: FormGroup
  openCard:boolean = true;
  createCard:boolean = false;
  note: notes  = new notes();

  constructor(private formBuilder:FormBuilder, private router: Router, private notesService:NotesService) { }

  ngOnInit() {
    this.addNoteForm = this.formBuilder.group({
      title: ['',Validators.required],
      description:['',Validators.required]
    });
    }
  AddNotes(){
    this.toggle=false;
    let data = {
      userId: localStorage.getItem('UserId'),
      title:this.addNoteForm.controls.title.value,
      description:this.addNoteForm.controls.description.value
    }
    console.log('data..........', data);
    if(this.addNoteForm!=null){
      console.log("iside if condition",data);
      this.notesService.AddNotes(data).subscribe(response=>
        {
          console.log("inside notes service", response);
          this.router.navigate(['/dashboard/notes']);
        })
    }
    else
    {
    
    }
    
  }
  openMainMatCard(){
    this.toggle=true;
   }
}
