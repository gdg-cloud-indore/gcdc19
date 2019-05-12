import { Component, AfterViewInit,OnInit } from '@angular/core';
import { CommanService } from '../../common/services/services'; 
import * as _ from 'underscore';
/*import * as Prism from 'prismjs';*/
import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	neweventList:any;
  constructor(private commonService: CommanService,public http: HttpClient,){ }

  ngOnInit() {
  	this.getEvent();
  }

ngAfterViewInit() {
    //this.getEvent();
  }
  getEvent()
  {
  	var urls = '../assets/allevents.json';
    //var urls = 'http://cors.io/?https://api.meetup.com/Google-Cloud-Developer-Community-Indore/events?desc=true&photo-host=public&page=8&status=past&key=29f5617a573f394d6d2f156a4643d';
  	const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
           this.http.get(urls,{headers}).subscribe((res)=>{
            var neweventList = JSON.parse(JSON.stringify(res));
            if(!_.isEmpty(neweventList))
            {
              this.neweventList = neweventList;
            }
        });
  }
}
