import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html' ,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }

  openNav(){
    let nav = document.getElementById('navbarSupportedContent');
    if (nav != null){
      if(nav.style.width == "0px"){
        nav.style.width = "250px";
      }else{
        nav.style.width = "0px";
      }
    }
  }

  closeNav(){
    let nav = document.getElementById('navbarSupportedContent');
    if (nav != null){
      if(nav.style.width != "0px"){
        nav.style.width = "0px";
      }
    }
  }

}
