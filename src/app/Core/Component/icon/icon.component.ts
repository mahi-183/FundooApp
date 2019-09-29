import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../Service/NotesService/notes.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { CollaborationComponent } from '../collaboration/collaboration.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() childMessageIcon;
  @Input() hideIcon;
  toggle:boolean=false;
  Image;
  label;
  noteType;
  reminder:"reminder";
  archive:boolean = true;
  selectedFile:File;
  // message;
  ///emmited the selected notes color
  @Output() selectedColor = new EventEmitter();
  @Output() selectedNoteType = new EventEmitter();
  @Output() AferCloseEvent = new EventEmitter();
 
  
  constructor(private notesService:NotesService, private snackbar:MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
  }

  colorArray : any[] = [
    [
      {color:"#f06292"},
      {color:"#81D4FA"},
      {color:"#a5d6a7"}
    ],
    [
      {color:"#ce93d8"},
      {color:"#bdbdbd"},
      {color:"#FFE57F"},
      {color:"#00BCD4"}
    ]
  ]

  mainMatMenu()
  {
    toggle:true;
  }
  mainMatMenuRestore(){
    toggle:false;
  }

  ///Set color on note 
  setcolor(color: any) {
    ////check childMessage data is undefined or not
    if(this.childMessageIcon == undefined)
    {
        console.log("inside card data",this.childMessageIcon);
        this.selectedColor.emit(color);
    }
    else
    {
          this.childMessageIcon.color=color;
          var data = {
          "color":this.childMessageIcon.color,
          "id":this.childMessageIcon.id
          }
          console.log("color inside icon component",color);
          
        this.notesService.updateNotes(this.childMessageIcon.id, data).subscribe(data =>
        {
              this.selectedColor.emit(color);
              this.snackbar.open("Set Color Successfull","undo",
              { duration: 5000 });
        },
        err=>{ 
              this.snackbar.open("Set Color Successfull","undo",
              { duration: 5000 });
        })
     }
  }

  //add image on note
  setImageOnNote(Image){
 
  }

  // onFileChanged($event,childMessageIcon){

  // }

  ///add note to trash
  Trash(){
    this.childMessageIcon.noteType=1;
    var data = {
      "id":this.childMessageIcon.id,
      "noteType":1
    }
    
    this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(response=>
      {
        this.snackbar.open("Note Trashed","undo",
          { duration: 5000 }
          )
      }),error=>{
        this.snackbar.open("Note Not trashed","undo",
          { duration: 5000 }
          )
      }
  }

  ///archive notes
  Archive(){
    try{
      if(this.childMessageIcon == undefined)
      {
          this.archive = false;
         this.noteType=2;
          console.log("inside card data",this.childMessageIcon);
          this.selectedNoteType.emit(this.noteType);
      }
      else
      {
        this.archive = false;
        this.childMessageIcon.noteType=2;
        this.noteType = this.childMessageIcon.noteType;
        var data = {
         "id":this.childMessageIcon.id,
          "noteType":2
         }
      
      this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(response=>
        {
          this.selectedNoteType.emit(this.noteType);
          console.log("archive response:",response);
          this.AferCloseEvent.emit(
            {
               type: 'update',
               data: []
             }
             );
          this.snackbar.open("moved note to archive","undo",
            { duration: 5000 }
            )
        }),error=>{
          this.snackbar.open("notes not moved to archive","undo",
            { duration: 5000 }
            )
        }
      }
    }
    catch(error)
    {
      console.log("error");
    }
  }

  unArchive(){
    try{
      if(this.childMessageIcon == undefined)
      {
          this.archive = true;
         this.noteType=0;
          console.log("inside card data",this.childMessageIcon);
          this.selectedNoteType.emit(this.noteType);
      }
      else
      {
        this.archive = true;
        this.childMessageIcon.noteType=0;
        this.noteType = this.childMessageIcon.noteType;
        var data = {
         "id":this.childMessageIcon.id,
          "noteType":0
         }
      
      this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(response=>
        {
          this.selectedNoteType.emit(this.noteType);
          console.log("unArchive response:",response);
          this.AferCloseEvent.emit(
            {
               type: 'update',
               data: []
             }
             );
          this.snackbar.open("moved note to UnArchive","undo",
            { duration: 3000 }
            )
        }),error=>{
          this.snackbar.open("notes not moved to UnArchive","undo",
            { duration: 3000 }
            )
        }
      }
    }
    catch(error)
    {
      console.log("error");
    }
  }

  ///restore notes from 
  Restore(){
    try{
      this.childMessageIcon.noteType=0;
      var data = {
        "id":this.childMessageIcon.id,
        "noteType":0
      }
      
      this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(response=>
        {
          
          console.log("archive response:",response);
          this.snackbar.open("notes restored successfully","undo",
            { duration: 3000 }
            )
        }),error=>{
          this.snackbar.open("notes not moved to archive","undo",
            { duration: 3000 }
            )
        }
    }
    catch(error)
    {
      console.log("error");
    }
  }
  
  ///delete the notes forever
  DeleteForever(){
    try{
      var data = {
        "id":this.childMessageIcon.id
      }
      
      this.notesService.deleteNotes(this.childMessageIcon.id).subscribe(response=>
        {
          
          console.log("delete notes response:",response);
          this.snackbar.open("notes deleted successufully","undo",
            { duration: 5000 }
            )
        }),error=>{
          this.snackbar.open("notes not deleted","undo",
            { duration: 5000 }
            )
        }
    }
    catch(error)
    {
      console.log("error");
    }
  }

  ///set the remider today date
  Today(childMessageIcon){
    try{
      console.log("card data",childMessageIcon);
    
      var date = new Date();
      date.setHours(20,0,0)
      childMessageIcon.reminder = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(data =>{
        console.log(data);
        // this.update.emit({});
      },err =>{
        console.log(err);
      })
    }
    catch(error){
     console.log("error"); 
    }
  }

  ///set the reminder tommarrow 
  Tomorrow(childMessageIcon)
  {
    var date = new Date();
    date.setHours(8,0,0)
    childMessageIcon.reminder = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate()+1) + " " +  date.getHours() + ":" + date.getMinutes();
    this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(data =>{
      console.log(data);
      // this.update.emit({});
    },err =>{
      console.log(err);
    })
  }

  
  //set the reminder to next week
  nextWeek(childMessageIcon)
  {
    var date = new Date();
    date.setHours(8,0,0)
    childMessageIcon.reminder = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate()+7) + " " +  date.getHours() + ":" + date.getMinutes();
    this.notesService.updateNotes(this.childMessageIcon.id,this.childMessageIcon).subscribe(data =>{
      console.log(data);
      // this.update.emit({});
    },err =>{
      console.log(err);
    })
  }

  //add label on note
  AddLabelToNote($event){
    
    
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];
    let uploadData=new FormData();
    uploadData.append('file',this.selectedFile,'file');
    console.log("upload",uploadData);

    console.log("id",this.childMessageIcon.id);
    this.notesService.uploadImage(uploadData,this.childMessageIcon.id).subscribe(response=>{
      console.log("response of upload image",response);
    })
  }

  openDialog(): void {
    // localStorage.setItem('noteId',childMessageIcon.id);
    // const dialogConfig = new MatDialogConfig();
    console.log("inside the icon component",this.childMessageIcon)
    const dialogRef = this.dialog.open(CollaborationComponent, {
      data: this.childMessageIcon
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }); 
  }
}
