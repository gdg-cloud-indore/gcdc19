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
  images:any;
  newTeamLists:any;
  constructor(private commonService: CommanService,public http: HttpClient,) { 
    
  }

  ngOnInit() {
    this.images = ['../img/banner/hero.jpg','../img/banner/hero-banner.png'];
  
   this.getEvent();
  }
  ngAfterViewInit() {
    //this.getEvent();
  }

  getEvent()
  {
    //this.neweventList = [{"created":1556125446000,"duration":21600000,"id":"260885724","name":"Cloud Next Extended 2019","rsvp_limit":300,"date_in_series_pattern":false,"status":"upcoming","time":1557635400000,"local_date":"2019-05-12","local_time":"10:00","updated":1557378329000,"utc_offset":19800000,"waitlist_count":0,"yes_rsvp_count":155,"venue":{"id":26217609,"name":"WittyFeed","lat":22.722963333129883,"lon":75.8870849609375,"repinned":true,"city":"Indore","country":"in","localized_country_name":"India"},"group":{"created":1532694839000,"name":"Google Cloud Developer Community, Indore","id":29367618,"join_mode":"open","lat":22.719999313354492,"lon":75.86000061035156,"urlname":"Google-Cloud-Developer-Community-Indore","who":"Members","localized_location":"Indore, India","state":"","country":"in","region":"en_US","timezone":"Asia/Calcutta"},"link":"https://www.meetup.com/Google-Cloud-Developer-Community-Indore/events/260885724/","description":"<p>This time Google Cloud Developers Community, Indore presents you the most exciting event for May 2019: Cloudnext Extended 2019!</p> <p>Most awaited event of the year - where we will be reviewing various intriguing cloud technologies introduced at the Google Cloudnext event held at San Francisco.</p> <p>So get ready to witness some of our expert speakers who will be conducting a variety of sessions on different areas of cloud-related technologies .</p> <p>Details:</p> <p>Date: 12 May 2019<br/>Venue: Wittyfeed Headquarters, Shekhar Central, Palasia, Indore<br/>Time: 10 AM to 4 PM</p> <p>Registration: 9-10<br/>Welcome Note: 10:15-10:30<br/>Speaker Sessions Phase 1 :<br/>Dharmesh Vaya-&gt; Google Anthos: 10:30-11:30<br/>Rajat Jaiswal-&gt; Business Automation using Microsoft Flow: 11:30-12:30<br/>Lunch : 12:30-1:00<br/>Speaker Sessions Phase 2:<br/>Tushar Pal -&gt; Google Cloud Run: 1:00-2:00<br/>Akash Agrawal -&gt; Kubernetes and ML: 2:00-3:00<br/>Panel discussion: 3:00-3:30<br/>Closing Note<br/>Networking</p> <p>Register here: <a href=\"https://www.eventbrite.com/e/cloud-next-extended-19-tickets-60827713328\" class=\"linkified\">https://www.eventbrite.com/e/cloud-next-extended-19-tickets-60827713328</a></p> <p>For any questions please E-Mail us at gcdcindore@gmail.com</p> ","how_to_find_us":"Shekhar Central at Palasia Square","visibility":"public","pro_is_email_shared":false}];
  	//var urls = 'http://cors.io/?https://api.meetup.com/Google-Cloud-Developer-Community-Indore/events?&sign=true&photo-host=public&page=20&key=29f5617a573f394d6d2f156a4643d';

      var urls = './assets/events.json';
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


