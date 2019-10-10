import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from '../../Service/DataService/data.service';
import { NotesService } from '../../Service/NotesService/notes.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditNoteComponent } from '../edit-note/edit-note.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {
  @Input() childMessage; 
  @Input() hideIcon;
  @Input() search;
  direction:any;
  userId;
  isGrid:boolean=true;
  isPin: any;
  @Output() selectedNoteType = new EventEmitter<any>();
  noteEdit: any;

  constructor(private dataService: DataService,private notesService:NotesService,private dialog:MatDialog) { }
  
  // main={
  //   gird:true,
  //   list:false
  // }
  ngOnInit() {

    this.userId = localStorage.getItem('UserId');
    
    this.dataService.messageOfGrid.subscribe(message => {
    console.log("direction=",this.direction);

      console.log("inside the dataService ngOninit message",message);
     // this.CSS = message ? 'row wrap' : 'column';
      if(message == false){
        this.isGrid = false;
        this.direction = "row wrap";
      }
      else{
        this.isGrid = true;
        this.direction = "column";
      }

      // this.main.gird=!message;
      // this.main.list=message;  
    });
  }
 
  /**
   *remove reminder from note
   */
  removeReminder(item)
  {
    item.reminder=null;
    this.notesService.updateNotes(item.id,item).subscribe(data =>{
    },err =>{
      console.log(err);
    })
  }
  /**
   *remove reminder from note
   */
  removeImage(item)
  {
    item.image=null;
    this.notesService.updateNotes(item.id,item).subscribe(data =>{
    },err =>{
      console.log(err);
    })
  }

  /**
   * update the note 
   * @param note note data which we will update
   */
  pinnote(note){
    note.isPin = true;
    this.isPin = note.isPin;
    console.log("inside display component",note);
    this.notesService.updateNotes(note.id,note).subscribe(reponse=>{
      console.log("inside display component");
    })
  }

  /**
   * update note as unpin
   * @param note note data which we will update 
   */
  unpinnote(note){
    note.isPin = false;
    this.isPin = note.isPin;
    console.log("inside display component",note);
    this.notesService.updateNotes(note.id,note).subscribe(reponse=>{
      console.log("inside display component");
    })
  }

  archive(event){
    if(event.type == 'update'){
      this.selectedNoteType.emit(event);
    }
  }

  openDialog(note): void {
    console.log(note);
    this.noteEdit = note;
    const dialogRef = this.dialog.open(EditNoteComponent, {
      data: this.noteEdit
    }
    );
    dialogRef.afterClosed().subscribe(result=>{    
      console.log("close event in display",result.id);
      console.log("close event result",result);
      this.notesService.updateNotes(result.id,result).subscribe(reult=>
        {
          
        },err =>{
          console.log(err);         
        }
        )     
    })
  }
}