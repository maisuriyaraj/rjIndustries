import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-services-component',
  templateUrl:'./services-component.component.html',
  styleUrls: ['./services-component.component.css']
})
export class ServicesComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.container').fadeIn('slow');
    });
  }

}
