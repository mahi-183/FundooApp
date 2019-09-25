import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from '../../Service/DataService/data.service';
import { NotesService } from '../../Service/NotesService/notes.service';

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
  constructor(private dataService: DataService,private notesService:NotesService) { }
  
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
  removeReminder(item)
  {
    item.reminder=null;
    this.notesService.updateNotes(this.userId,item).subscribe(data =>{
    },err =>{
      console.log(err);
    })
  }
}