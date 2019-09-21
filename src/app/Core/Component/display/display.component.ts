import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {
  @Input() childMessage; 
  @Input() hideIcon;
  @Input() search;
  @Output() colorEmitted = new EventEmitter <any>()
  
  constructor() { }

  ngOnInit() {
  
  }

  setColor(event){
    this.colorEmitted.emit(event);
  }

  // openDialog(note): void {
  //   console.log(note);
  //   const dialogRef = this.dialog.open(DialogComponent, {

  //     data: {note}
  //   }
  //   );
  //   dialogRef.afterClosed().subscribe(result=>{    
  //     console.log(result.id);
  //     this.notesService.updateNotes(result).subscribe(reult=>
  //       {
          
  //       },err =>{
  //         console.log(err);         
  //       }
  //       )     
  //   })
  // } 
}
