import { Component, OnInit,AfterViewInit } from '@angular/core';
import { CommanService } from '../../common/services/services'; 
import * as _ from 'underscore';
/*import * as Prism from 'prismjs';*/
import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
	newTeamLists:any;
  constructor(private commonService: CommanService,public http: HttpClient,) { }

  ngOnInit() {
  	this.getEventJson();
  }

  getEventJson()
  {
    var urls = '../assets/users.json';
    //var urls = 'https://raw.githubusercontent.com/gdg-iwd/iwd-indore/master/src/assets/data/team.json';
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
           this.http.get(urls,{headers}).subscribe((res)=>{
            var newteamtList = JSON.parse(JSON.stringify(res));
            if(!_.isEmpty(newteamtList))
            {
              this.newTeamLists = newteamtList;
            }
        });
  }
}



