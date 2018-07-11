import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html'
})
export class MessageComponent {

  constructor( private apiServices: ApiService) {}

  ngOnInit() {
    this.apiServices.getMessages();
  }
}
