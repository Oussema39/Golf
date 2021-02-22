import { links } from './../shared/links';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {


  constructor() {
  }

  getLinks = () => links;

}
