import { Link } from '../../shared/link';
import { LinksService } from '../../services/links.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public links: Link[];

  constructor(private service:LinksService) { }

  ngOnInit(): void {
    this.links = this.service.getLinks();
    window.addEventListener('resize',()=>{
      this.mobileView = window.innerWidth <= 1280;
    })
  }

  sideNav(side){
    if (!this.toggled){
      side.style.transform = "translateX(0)";
    }else{
      side.style.transform = "translateX(100%)";
    }
    this.toggled = !this.toggled;
  }

  toggled = false;

  mobileView:boolean;

}
