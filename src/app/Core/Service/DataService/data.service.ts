import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject(' ');
  currentMessage = this.messageSource.asObservable();
  private gridList = new BehaviorSubject<boolean>(false);
  messageOfGrid = this.gridList.asObservable();

  constructor() { }
  changeMessageGrid(girdMessage:boolean){
    this.gridList.next(girdMessage);
  }
  changeMsg(viewMessage: string) {
    this.messageSource.next(viewMessage)
  }
}
