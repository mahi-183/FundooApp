import { Component } from '@angular/core';
import { MessagingService } from "./shared/messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'FundooApp';
  message;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    // const userId = 'user001';
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }
}
