import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = '';

  setMessage(msg: string) {
    this.message = msg;
  }

  resetMessage() {
    this.message = '';
  }
}