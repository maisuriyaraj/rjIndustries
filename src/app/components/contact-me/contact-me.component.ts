import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { form } from 'src/app/types/form';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  info:form={
    fname:'',
    lname:'',
    email:'',
    phno:'',
    reason:''
  }
  constructor(private _Msgpass:ContactService) { }
  onMsg(){
    this._Msgpass.onclick();
  }
  ngOnInit(): void {
    $(document).ready(function(){
      $('.container-fluid').fadeIn('slow');
      $('#col1').fadeIn('slow');
      $('#form').fadeIn('slow');
    });
  }
}