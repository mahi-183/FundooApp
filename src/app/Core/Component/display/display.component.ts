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
  
  constructor() { }

  ngOnInit() {
  
  }
}
