import { ChatService } from './chat.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[],
  providers: [ChatService],
})
export class ChatModule { }
