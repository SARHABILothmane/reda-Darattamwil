import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  validator: boolean = true;
  contact: Contact ={
    nom:"",
    email:"",
    message:""
  }
  contactForm = new FormGroup({
    nom:new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    email:new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    message:new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    });
    constructor(private _statutContact: ContactService) { }

  ngOnInit() {
  }
  //add
  addContact(){
    this._statutContact.addContact(this.contact).subscribe(res => {  
        Swal.fire({
          icon: 'success',
          title: 'Your artical was add successfully',
        })
        this.contact.nom="";
        this.contact.email="";
        this.contact.message="";
        // this.statut.financement=null;
         this.validator = false;
        this.ngOnInit();
        
      })
      err => console.log(err)
  }
}
