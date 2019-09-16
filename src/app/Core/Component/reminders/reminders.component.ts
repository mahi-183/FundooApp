import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Service/NotesService/notes.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  reminderArray;
  userId;
  constructor(private notesService:NotesService) { }

  ngOnInit() {
    this.getAllReminderNotes();
  }

  getAllReminderNotes(){
    this.userId = localStorage.getItem('UserId')
    this.notesService.getAllReminderNotes(this.userId).subscribe(response=>{
      console.log("response of reminder", response);
      this.reminderArray = response['result'];
      console.log("reminder array", this.reminderArray);
    })
  }

}
