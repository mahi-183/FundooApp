import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() childMessage; 


  @Output() colorEmitted = new EventEmitter <any>()
  constructor() { }

  ngOnInit() {
  
  }
  setColor(event){
    this.colorEmitted.emit({});
  }
}
