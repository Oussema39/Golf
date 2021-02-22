import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  fields = [
    {label : 'First name', type : 'text' },
    {label : 'Last name', type : 'text' },
    {label : 'Email', type : 'email', placeHolder : 'example@azerty.com' },
    {label : 'Phone', type : 'number', placeHolder : '99999999' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
