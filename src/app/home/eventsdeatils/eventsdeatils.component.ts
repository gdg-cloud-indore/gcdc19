import { Component, AfterViewInit,OnInit } from '@angular/core';
import { CommanService } from '../../common/services/services'; 
import * as _ from 'underscore';
/*import * as Prism from 'prismjs';*/
import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-eventsdeatils',
  templateUrl: './eventsdeatils.component.html',
  styleUrls: ['./eventsdeatils.component.css']
})
export class EventsdeatilsComponent implements OnInit {

  events:any;
  ids:any;
  constructor(private commonService: CommanService,public http: HttpClient,private route: ActivatedRoute,){ }

  ngOnInit() {
  	let self = this;
		this.route.params.subscribe( params => {
			self.ids   = params['eventsId'];
			this.getEvent(self.ids);
		});
  }


  getEvent(ids)
  {
  	//var urls = '../assets/events.json';
    var urls = 'http://cors.io/?https://api.meetup.com/Google-Cloud-Developer-Community-Indore/events?key=29f5617a573f394d6d2f156a4643d&id='+ids;
  	const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
           this.http.get(urls,{headers}).subscribe((res)=>{
            var neweventList = JSON.parse(JSON.stringify(res));
            if(!_.isEmpty(neweventList))
            {
              this.events = neweventList;
            }
        });
  }

}
