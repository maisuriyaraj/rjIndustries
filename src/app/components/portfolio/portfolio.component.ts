import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as Aos from 'aos';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  jsondata: any;
  url: string = "./assets/json/portfolio.json";
  isOpen = false;
  openModal: boolean = false;
  video_url:string = "";
  videoTitle:string = ""
  constructor(private data: HttpClient) { }

  
  ngOnInit(): void {
    this.loadjson();
    Aos.init();
  }

  loadjson() {
    this.data.get(this.url).subscribe((datas) => {
      this.jsondata = datas;
    }, error => {
      console.log(error);
    });
  }

  openDesc(id: string, index: number) {
    let div = document.getElementById(id);
    if (div != null) {
      if (this.isOpen == false) {
        div.style.display = "block";
        this.isOpen = true;
      } else {
        div.style.display = "none";
        this.isOpen = false;
      }
    }
  }

  OpenModal(d:any) {
      if(d){
        this.video_url = d.url
        this.videoTitle = d.tit
      }
  }

}
