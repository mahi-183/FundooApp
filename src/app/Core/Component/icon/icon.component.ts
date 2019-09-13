import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../Service/NotesService/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() childMessageIcon; 
  message;
  @Output() colorChanged = new EventEmitter();
  @Output() selectedColor = new EventEmitter();
  constructor(private notesService:NotesService, private router:Router) { }
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
  ngOnInit() {
  }

  setcolor(color: any) {
    console.log("color Array",this.colorArray)
    if(this.childMessageIcon.id==undefined){
        console.log("inside card data",this.childMessageIcon.id);
        
    }
    else{
    console.log(this.childMessageIcon,"card")
    this.childMessageIcon.color = color;
    this.childMessageIcon.color = this.childMessageIcon.color;
    console.log("childMessage id",this.childMessageIcon.id);
    var data = {
      "color":this.childMessageIcon.color,
      "id":this.childMessageIcon.id
    }
    this.notesService.updateNotes(this.childMessageIcon.id, data).subscribe(data =>{
      console.log("inside icon data",data);
      console.log("inside icon data",this.childMessageIcon);
      // this.router.navigate(['\dashboard\display'])
      this.selectedColor.emit(color);
    },err=>{
      console.log(err);
    })
  }
  }
}
