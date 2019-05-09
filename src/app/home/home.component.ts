import { Component, AfterViewInit } from '@angular/core';
import { CommanService } from '../common/services/services'; 
import * as _ from 'underscore';
/*import * as Prism from 'prismjs';*/
import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  /**
   * @method ngAfterViewInit
   */
  neweventList:any;
  newTeamLists:any;
  constructor(private commonService: CommanService,public http: HttpClient,) { 
    
  }
  ngOnInit() {
   this.getEvent();
  }
  ngAfterViewInit() {
    this.getEventJson();
  }

  getEvent()
  {
    // this.neweventList = [{"created":1551684293000,"duration":14400000,"id":"259465282","name":"GCDC: Cloud Study Jam '19","rsvp_limit":300,"date_in_series_pattern":false,"status":"past","time":1552192200000,"local_date":"2019-03-10","local_time":"10:00","updated":1552205433000,"utc_offset":19800000,"waitlist_count":0,"yes_rsvp_count":32,"venue":{"id":26191331,"name":"Techcoopers Software Solutions","lat":22.722747802734375,"lon":75.88687133789062,"repinned":true,"address_1":"Shekhar central","city":"Indore","country":"in","localized_country_name":"India"},"group":{"created":1532694839000,"name":"Google Cloud Developer Community, Indore","id":29367618,"join_mode":"open","lat":22.719999313354492,"lon":75.86000061035156,"urlname":"Google-Cloud-Developer-Community-Indore","who":"Members","localized_location":"Indore, India","state":"","country":"in","region":"en_US","timezone":"Asia/Calcutta"},"link":"https://www.meetup.com/Google-Cloud-Developer-Community-Indore/events/259465282/","description":"<p>Announcing Cloud Study Jam \u201919</p> <p>New to the Cloud but don't know where to start? Join us for a Cloud Study Jams.</p> <p>Get official Google training, a $55+ value, free of charge. You will get hands-on experience with several machine learning tools from Google and with the Cloud Console.</p> <p>You will have free access to more labs you can finish at home. Complete all labs in the quest and earn a Google-hosted badge for your online profile, and additional 30 days access to the training platform to compete in any labs you want.</p> <p>Topic: Kubernetes<br/>Date: 10th Mar\u201919<br/>Venue: Techcoopers Software Solutions<br/>Address: Shekhar central, 214, 5-4, Manorama Ganj, Indore, Madhya Pradesh 452001<br/>Agenda :<br/>10 : 00 am - Managing Deployments Using Kubernetes Engine<br/>11 : 00 am - Awwvision: Cloud Vision API from a Kubernetes Cluster<br/>12 : 00 am - Break<br/>12 : 10 am - Kubeflow End to End<br/>01 : 00 pm - Deploy a Web App on GKE with HTTPS Redirect using Lets Encrypt<br/>02 : 00 pm - Event ends - THANK YOU!</p> <p>Please Register: <a href=\"https://goo.gl/forms/rMA8Ie4ixB5Hpenq1\" class=\"linkified\">https://goo.gl/forms/rMA8Ie4ixB5Hpenq1</a></p> <p>Bring a laptop (fully charged, will have limited power sockets). We will provide Wi-Fi. The labs will run on all of the latest versions of the popular browsers. For the best experience, make sure your laptop has Firefox or Chrome installed</p> ","how_to_find_us":"Shekhar central, 214, 5-4, Manorama Ganj, Indore, Madhya Pradesh 452001","visibility":"public","pro_is_email_shared":false}];
    let obj = {};
  	var urls = 'https://api.meetup.com/Google-Cloud-Developer-Community-Indore/events?desc=true&photo-host=public&page=8&status=past&key=29f5617a573f394d6d2f156a4643d';
  	this.commonService.getMethod(urls)
        .then(data => {
          var neweventList = data;
          console.log('ddddd',neweventList);
         if(!_.isEmpty(neweventList))
         {
            this.neweventList = neweventList;
         }
    },error =>console.log(error))
  }

  getEventJson()
  {
    var urls = './assets/users.json';
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


