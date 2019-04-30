import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {
	images:any;
	constructor() { }

  ngOnInit() {
  	this.images = ['../img/banner/hero-banner.png','../img/banner/hero-banner.png','../img/banner/hero-banner.png','../img/banner/hero-banner.png','../img/banner/hero-banner.png'];
  }

}
