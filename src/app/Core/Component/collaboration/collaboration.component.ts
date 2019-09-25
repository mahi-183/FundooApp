import { Component, OnInit, Inject } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../../Service/NotesService/notes.service';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {
  FirstName: string;
  LastName: string;
  Email: string;
  userId: string;
  receiverEmail: void;

  constructor(public dialogRef: MatDialogRef<CollaborationComponent>, private notes: NotesService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.FirstName = localStorage.getItem("FirstName");
    this.LastName = localStorage.getItem("LastName");
    this.Email = localStorage.getItem("Email");
    this.userId = localStorage.getItem('UserID');
  }

  ReceiverEmail = new FormControl('',Validators.email);
  add(){
    
  }
}
