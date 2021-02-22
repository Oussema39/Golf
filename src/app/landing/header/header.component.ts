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

  mobileView:boolean;

}
