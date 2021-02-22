import { FooterSection } from './../../shared/footer_section';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icons: String[] = ['facebook','instagram','twitter','tumblr'];

  pars : FooterSection[] = [
    {title : 'project', content : ['Lorem Ipsum', 'ipsum', 'dolor sit', 'amet']},
  ]

  fields : String[] = [
    'Company Info',
    'Career',
    'Contact Us',
    'Lorem ipsum',
  ]

  constructor() { }

  ngOnInit(): void {
    while (this.pars.length < 4){
      this.pars.push(this.pars[0]);
    }
  }

}
