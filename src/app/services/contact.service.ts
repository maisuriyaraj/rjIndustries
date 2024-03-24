import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  onclick(){
    alert("I will be touched you soon.. Thanks for visit..");
  }
  constructor() { }
}
