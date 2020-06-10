import { Observable } from 'rxjs';
import { ChatService , Message} from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
messages : Observable<Message[]>;
formValue : string ;
scroller: any;

  constructor(private chat : ChatService) { }

  ngOnInit() {
    //s'ajoute au tableau après chaque nouveau message ajouté à feedSource
    this.messages = this.chat.conversation.asObservable()
    .pipe(
      scan((acc, val)  => acc.concat(val)),
      
    ),
    console.log(this.messages)
    this.chat.talk();
    // $(document).ready(function(){
    //   $('#action_menu_btn').click(function(){
    //     $('.action_menu').toggle();
    //   });
    //     });
  }

  sendMessage(){
    console.log(this.messages)
    this.chat.converse(this.formValue);
    this.formValue ='';
  }

}
