import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl:'./footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('footer').fadeIn(1000);
      $('.nav-item').click(function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
      });
    });
  }

}
