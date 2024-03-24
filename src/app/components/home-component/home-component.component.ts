import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home-component',
  templateUrl:'./home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private loader :NgxSpinnerService) { }

  ngOnInit(){
    Aos.init();
    this.spiner();
  }

  spiner(){
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
    }, 3000);
  }

}
