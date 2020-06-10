import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
 //import { ApiAiClient } from 'api-ai-javascript';
 import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { BehaviorSubject } from 'rxjs';


export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
readonly token = environment.dialogflow.angularBot;
readonly client = new ApiAiClient({accessToken: this.token})
conversation =  new BehaviorSubject<Message[]>([]);
  constructor() { }
    // Adds message to source
    update(msg: Message) {
      this.conversation.next([msg]);
    }
  
    converse(msg: string) {
      const userMessage = new Message(msg, 'user');
      this.update(userMessage);
  
      return this.client.textRequest(msg)
                 .then(res => {
                    const speech = res.result.fulfillment.speech;
                    const botMessage = new Message(speech, 'bot');
                    this.update(botMessage);
                 });
    }

//   //ajouter un message à la ressource
// update(msg :Message){
//   this.conversation.next([msg]);
//   return this.client.textRequest(msg)
//   .then(res => {
//     const speech = res.result.fulfillment.speech;
//     const botMessage = new Message(speech , 'bot');
//     this.update(botMessage);
//   });
// }

// //envoie et reçoit un message de dialgflow
// converse(msg : string){
//   const userMessage = new Message(msg , 'user');
//   this.update(userMessage)
// }


  talk(){
    this.client.textRequest("salut")
    .then(res=>console.log(res));
  }
}
