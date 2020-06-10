import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 constructor(private http:HttpClient) { }
    addContact(contact){
      return this.http.post<any>(`${environment.apiUrl}/api/contact/contacts` , contact)
 
  }
}
