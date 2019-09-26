import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../../Service/NotesService/notes.service';
import { UserService } from '../../Service/UserService/user.service';

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
  searchValue;
  userArray;
  constructor(public dialogRef: MatDialogRef<CollaborationComponent>, private notes: NotesService,
    @Inject(MAT_DIALOG_DATA) public data: any, private notesService: NotesService, private userService:UserService) { }

  ngOnInit() {
    this.FirstName = localStorage.getItem("FirstName");
    this.LastName = localStorage.getItem("LastName");
    this.Email = localStorage.getItem("Email");
    this.userId = localStorage.getItem('UserId');
  }
  
  createdBy = new FormControl('',Validators.email);
  
  /**
   * search user
   * @param $event string event which contains search value
   */
  search(event:any){
    this.searchValue = event.target.value +'\n';
    console.log("search value",this.searchValue);
    this.searchValue = this.searchValue.trim();
    if(this.searchValue!=undefined && this.searchValue!=null && this.searchValue!='')
    {
      this.userService.SearchUser(this.searchValue).subscribe(response=>{
        this.userArray = response['result'];
        console.log("response in collaborator search",this.userArray);
      })
    }
    else
    {
      this.userArray=[];
    }
  }

  /**
   * add collaborator
   * @param createdBy collabarator email id
   */
  addCollaborator(createdBy){
    console.log("note Id inside the collaborator",this.data.id)
    var data1 = {
      'userId':this.userId,
      'noteId' : this.data.id,
      'createdBy':this.createdBy.value
    }
    console.log("collaborator data", data1)
    // this.notesService.addCollaborator(data1).subscribe(response=>{
    //   console.log("response",response);
    // });

  }

}
