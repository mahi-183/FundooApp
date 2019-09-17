import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject(' ');
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMsg(viewMessage: string) {
    this.messageSource.next(viewMessage)
  }
}
