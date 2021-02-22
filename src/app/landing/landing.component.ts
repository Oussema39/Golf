import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }



  fields = [
    {label : 'First name', type : 'text' },
    {label : 'Last name', type : 'text' },
    {label : 'Email', type : 'email', placeHolder : 'example@azerty.com' },
    {label : 'Phone', type : 'number', placeHolder : '99999999' },
  ]



  ngOnInit(): void {
  }






}
